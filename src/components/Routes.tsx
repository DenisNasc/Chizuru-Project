import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import {useDispatch} from 'react-redux';

import useLocalStorage from 'hooks/useLocalStorage';
import useReduxStore from 'hooks/useReduxStore';
import useVerifyToken from 'hooks/useVerifyToken';

import Login from 'pages/Login';
import Home from 'pages/Home';

import {USER_LOGIN} from 'state/actions/user';

const Routes: React.FC = () => {
    const dispatch = useDispatch();

    // VERIFICAR SE HÁ TOKEN NO LOCALSTORAGE, SE TIVER VERIFICAR SE ELE ESTÁ VÁLIDO PARA O LOGIN, SENÃO REDIRECIONAR PARA A PAGE DE LOGIN PADRÃO
    const [userToken, setUserToken] = useLocalStorage('userToken', false);

    // ENVIAR O TOKEN PARA O SERVIDOR VERIFICAR SE É VALIDO
    const [answerFromServer, errorMessage] = useVerifyToken(userToken);

    // VERIFICAR A RESPOSTA RECEBIDA SOBRE O TOKEN DO SERVER
    console.log('token', userToken);
    console.log('token', answerFromServer);

    useEffect(() => {
        if (!answerFromServer) return;
        setUserToken(answerFromServer.token);
        dispatch({type: USER_LOGIN, payload: {...answerFromServer}});
    }, [answerFromServer]);

    const {
        user: {id},
    } = useReduxStore();

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
