import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./reducers";
import "./static/main.css";
import "./static/gravity/gravity.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,

  document.getElementById("root")
);
