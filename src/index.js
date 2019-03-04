import React from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Editor from "./pages/editor/Editor";
import configureStore from "./redux/configureStore";
import "./db";
import Signup from "./pages/Signup";
import LogIn from "./pages/LogIn";
import "./css/index.scss";

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <Router>
        <Editor path="/" />
        {/* <Signup path="/" /> */}
        {/* <LogIn path="/" /> */}
      </Router>
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./pages/editor/Editor", renderApp);
}

renderApp();
