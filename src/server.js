import path from "path";
import fs from "fs";

import express from "express";
import cors from "cors";
import React from "react";
import ReactDOM from "react-dom/server";
import { flushToHTML } from "styled-jsx/server";
import ClientFormGenerator from "./components/ClientFormGenerator";

const PORT = process.env.PORT || 3006;
const server = express();

server.use(cors());

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
  const html = ReactDOM.renderToStaticMarkup(
    <html>
      <head>{styles}</head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: markup }} />
      </body>
    </html>
  );
  res.json({ css: styles, html: markup });
});

server.listen(PORT, () => {
  console.log(`😎  Server is listening on port ${PORT}`);
});
