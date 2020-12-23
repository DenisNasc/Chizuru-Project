import React from "react";

import Helmet from "components/Helmet";
import Header from "components/Header";

const DefaultTemplate: React.FC = ({ children }) => {
    return (
        <>
            <Helmet title="Chizuru Project" />
            <Header />
            {children}
        </>
    );
};

export default DefaultTemplate;
