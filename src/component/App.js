import React, { Component } from "react";
import Registration from './Registration/Registration.js';
import Todo from './Todo/Todo.js';
import { Route, BrowserRouter, Redirect, Switch, Link, withRouter } from "react-router-dom";

class App extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Registration} />
                        <Route path='/todo' component={Todo}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default withRouter(App)