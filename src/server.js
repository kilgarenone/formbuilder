import path from "path";
import fs from "fs";

import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import flush from "styled-jsx/server";
import ClientFormGenerator from "./components/ClientFormGenerator";

const PORT = process.env.PORT || 3006;
const app = express();

const forms = [
  { label: "helo", pattern: "/d/" },
  { label: "world", pattern: "/d/" }
];
// tell Express to serve contents from the build directory as static files.
app.use(express.static(path.resolve("public")));

app.get("/", (req, res) => {
  const markup = ReactDOM.renderToStaticMarkup(
    <ClientFormGenerator forms={forms} />
  );
  const styles = flush();
  const html = ReactDOM.renderToStaticMarkup(
    <html>
      <head>{styles}</head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: markup }} />
      </body>
    </html>
  );
  res.end(`<!doctype html>${html}`);
});

app.listen(PORT, () => {
  console.log(`😎  Server is listening on port ${PORT}`);
});
