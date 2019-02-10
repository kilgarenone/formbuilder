import path from "path";
import fs from "fs";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import React from "react";
import ReactDOM from "react-dom/server";
import { flushToHTML } from "styled-jsx/server";
import helmet from "helmet";
import morgan from "morgan";
import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import querystring from "querystring";

import ClientFormGenerator from "components/ClientFormGenerator";
import goFetch from "./fetch";

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_API_BASEURL}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_API_IDENTIFIER,
  issuer: `${process.env.AUTH0_API_BASEURL}/`, // needs that forward slash! -_-
  algorithms: ["RS256"]
});

const server = express();

server.use(cors());

server.use(helmet());
server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true
  })
);
server.use(morgan("combined"));

const forms = [
  { label: "helo", pattern: "/d/" },
  { label: "world", pattern: "/d/" }
];
// tell Express to serve contents from the build directory as static files.
server.use(express.static(path.resolve("public")));

server.get("/private", checkJwt, (req, res) => {
  console.log(req);
  res.json({ message: "hello private" });
});

server.get("/logout", (req, res) => {
  // removes cookie by setting expires date to the past
  res.cookie("access_token", "", {
    expires: new Date(0),
    path: "/"
  });

  // TODO: redirect back to landing page(?)
  // res.redirect(`https://mariya.eu.auth0.com/v2/logout?
  // client_id=${process.env.AUTH0_CLIENT_ID}&
  // returnTo=http://localhost:8081`);
});

server.get("/callback", async (req, res) => {
  const body = {
    grant_type: "authorization_code",
    code: req.query.code,
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_SECRET,
    redirect_uri: process.env.AUTH0_REDIRECT_URI
  };

  const response = await goFetch("/oauth/token", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });

  console.log("auto0 auth callback response", response);
  res.cookie("access_token", response.access_token);
  res.redirect(
    303,
    `${process.env.AUTH0_REDIRECT_SPA}#${querystring.stringify({
      expires_in: response.expires_in
    })}`
  );
});

server.get("/", (req, res) => {
  // res.redirect("http://localhost:8080");
  // const markup = ReactDOM.renderToStaticMarkup(
  //   <ClientFormGenerator forms={forms} />
  // );
  // const styles = flushToHTML();
  // res.json({ css: styles, html: markup });
  // const html = ReactDOM.renderToStaticMarkup(
  //   <html>
  //     <head>{styles}</head>
  //     <body>
  //       <div id="root" dangerouslySetInnerHTML={{ __html: markup }} />
  //     </body>
  //   </html>
  // );
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`😎  Server is listening on port ${PORT}`);
});
