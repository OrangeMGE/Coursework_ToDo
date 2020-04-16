import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Switch, Link, withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./component/App";


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))