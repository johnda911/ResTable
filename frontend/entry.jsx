import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  // console.log("entry file is running");
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
