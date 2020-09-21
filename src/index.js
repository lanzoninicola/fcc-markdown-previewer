import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/components/index";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

import * as serviceWorker from "./serviceWorker";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
