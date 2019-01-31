import React from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Editor from "./pages/editor/Editor";
import configureStore from "./redux/configureStore";
import AuthCallback from "./components/AuthCallback";

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <Router>
        <Editor path="/" />
        <AuthCallback path="callback" />
      </Router>
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./pages/editor/Editor", renderApp);
}

renderApp();
