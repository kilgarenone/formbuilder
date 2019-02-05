import React from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Editor from "./pages/editor/Editor";
import configureStore from "./redux/configureStore";

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <Router>
        <Editor path="/" />
      </Router>
      <style jsx global>
        {`
          :root {
            --base-font-size: 1rem;
            --base-line-height: 1.4;
            --line-height-small: 1.26;
            --line-height-big: 1.16;
            --font-small: 0.804rem;
            --font-normal: 1.125rem;
            --font-normalx2: 1.175rem;
            --font-M: 1.414rem;
            --font-L: 1.788rem;
            --font-XL: 2.53rem;
          }

          @media (min-width: 35em) {
            :root {
              --line-height-small: 1.36;
              --line-height-big: 1.23;
              --base-font-size: 1.125rem;
              --base-line-height: 1.5;
            }
          }

          .flex-col-center {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .flex-xy-center {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .flex {
            display: flex;
          }

          .mb-0 {
            margin-bottom: calc(
              var(--base-line-height) * 1 * var(--base-font-size)
            );
          }

          .mb-1 {
            margin-bottom: calc(
              var(--base-line-height) * 1.5 * var(--base-font-size)
            );
          }

          .mb-2 {
            margin-bottom: calc(
              var(--base-line-height) * 2 * var(--base-font-size)
            );
          }

          .mb-3 {
            margin-bottom: calc(
              var(--base-line-height) * 2.5 * var(--base-font-size)
            );
          }

          .pb-0 {
            padding-bottom: calc(
              var(--base-line-height) * 1 * var(--base-font-size)
            );
          }

          .pb-1 {
            padding-bottom: calc(
              var(--base-line-height) * 1.5 * var(--base-font-size)
            );
          }

          .pb-2 {
            padding-bottom: calc(
              var(--base-line-height) * 2 * var(--base-font-size)
            );
          }

          .pb-3 {
            padding-bottom: calc(
              var(--base-line-height) * 2.5 * var(--base-font-size)
            );
          }

          label {
            color: rgba(0, 0, 0, 0.74);
          }

          h1,
          .h1,
          h2,
          .h2 {
            line-height: var(--line-height-big);
          }

          h1 {
            font-size: var(--font-L);
          }

          h3,
          .h3,
          h4,
          .h4 {
            line-height: var(--line-height-small);
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          html {
            font-family: -apple-system, system-ui, BlinkMacSystemFont,
              "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: var(--base-font-size);
            line-height: var(--base-line-height);
            font-style: normal;
            font-weight: 400;
            -webkit-text-size-adjust: 100%;
            /* Font varient */
            font-variant-ligatures: none;
            -webkit-font-variant-ligatures: none;
            /* Smoothing */
            text-rendering: optimizeLegibility;
            -moz-osx-font-smoothing: grayscale;
            -moz-font-feature-settings: "liga" on;
            font-smoothing: antialiased;
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
            word-wrap: break-word;
            color: rgba(0, 0, 0, 0.84);
          }

          button {
            border: none;
          }

          blockquote,
          body,
          dd,
          dl,
          fieldset,
          figure,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          legend,
          ol,
          p,
          pre,
          ul {
            margin: 0;
            padding: 0;
          }

          main,
          li {
            display: block;
          }

          strong {
            font-weight: bold;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          img {
            max-width: 100%;
            height: auto;
            border: 0;
          }
        `}
      </style>
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./pages/editor/Editor", renderApp);
}

renderApp();
