import React from "react";
import createDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from "./App";

import "./index.css";

const root = createDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

{
  /* <React.StrictMode>
</React.StrictMode> */
}
