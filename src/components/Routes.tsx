import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import {UserContext} from 'context/UserContext';

import Login from 'pages/Login';
import Home from 'pages/Home';

const Routes: React.FC = () => {
    // VERIFICAR SE HÁ TOKEN NO LOCALSTORAGE, SE TIVER VERIFICAR SE ELE ESTÁ VÁLIDO PARA O LOGIN, SENÃO REDIRECIONAR PARA A PAGE DE LOGIN PADRÃO

    const {
        userContext: {id},
    } = useContext(UserContext);

    return (
        <Router>
            {!id && <Redirect to="/" />}
            {id && <Redirect from="/" to="/home" />}
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/profile" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
