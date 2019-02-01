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
import fetch from "node-fetch";

import ClientFormGenerator from "./components/ClientFormGenerator";

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());
server.use(morgan("combined"));

const forms = [
  { label: "helo", pattern: "/d/" },
  { label: "world", pattern: "/d/" }
];
// tell Express to serve contents from the build directory as static files.
server.use(express.static(path.resolve("public")));

server.get("/callback", (req, res) => {
  const body = {
    grant_type: "authorization_code",
    code: req.query.code,
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_SECRET,
    redirect_uri: process.env.AUTH0_REDIRECT_URI
  };

  fetch(`${process.env.AUTH0_API_BASEURL}/oauth/token`, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(json => {
      console.log("auto0 res", json);
      res.redirect(process.env.AUTH0_REDIRECT_SPA);
    });
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

const PORT = process.env.PORT || 3006;

server.listen(PORT, () => {
  console.log(`😎  Server is listening on port ${PORT}`);
});
