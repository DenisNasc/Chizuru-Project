import React from "react";

import Routes from "components/Routes";

import AppContextProvider from "context/AppContext";
import UserContextProvider from "context/UserContext";

import StyleProvider from "styles";

const App: React.FC = () => {
    return (
        <AppContextProvider>
            <UserContextProvider>
                <StyleProvider>
                    <Routes />
                </StyleProvider>
            </UserContextProvider>
        </AppContextProvider>
    );
};

export default App;
