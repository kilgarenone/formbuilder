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

import ClientFormGenerator from "./components/ClientFormGenerator";

const PORT = process.env.PORT || 3006;
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

server.get("/hello", (req, res) => {
  const markup = ReactDOM.renderToStaticMarkup(
    <ClientFormGenerator forms={forms} />
  );

  const styles = flushToHTML();

  res.json({ css: styles, html: markup });

  // const html = ReactDOM.renderToStaticMarkup(
  //   <html>
  //     <head>{styles}</head>
  //     <body>
  //       <div id="root" dangerouslySetInnerHTML={{ __html: markup }} />
  //     </body>
  //   </html>
  // );
});

server.listen(PORT, () => {
  console.log(`😎  Server is listening on port ${PORT}`);
});
