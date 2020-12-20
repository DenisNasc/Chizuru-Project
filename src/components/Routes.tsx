import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "pages/Login";
import Home from "pages/Home";

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/:user" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
