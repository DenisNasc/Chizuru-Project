import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Login from "pages/Login";
import Home from "pages/Home";
import { UserContext } from "./App";

const Routes: React.FC = () => {
    const {
        userContext: { id },
    } = useContext(UserContext);

    return (
        <Router>
            {!id && <Redirect to="/" />}
            {id && <Redirect from="/" to={`/${id}`} />}
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/:userId" exact>
                    <Home />
                </Route>
                <Route path="/:userId/profile" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
