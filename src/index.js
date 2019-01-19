import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Editor from "./pages/editor/Editor";
import configureStore from "./redux/configureStore";

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <Editor />
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./pages/editor/Editor", renderApp);
}

renderApp();
