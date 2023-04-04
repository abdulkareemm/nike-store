import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux"
import Store from "./app/Store";
import {Toaster} from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
  <Toaster position="top-center" reverseOrder={false}/>
    <App />
  </Provider>
);
