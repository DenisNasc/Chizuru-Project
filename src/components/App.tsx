import React from "react";

import Routes from "components/Routes";

import UserContextProvider from "context/UserContext";

const App: React.FC = () => {
    return (
        <UserContextProvider>
            <Routes />;
        </UserContextProvider>
    );
};

export default App;
