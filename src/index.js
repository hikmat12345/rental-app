import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import reducer from "./redux/reducers";
import "./main.css";
import Test from "./components/dashboard/test";
import dayNightStayStore from "./redux/actions/dayNightStay";
const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {console.log(store)}
      <App />
      {/* <Switch>
            <Route component={Test}  path="/mntest" />
        </Switch> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
