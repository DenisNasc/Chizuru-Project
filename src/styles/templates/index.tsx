import React from "react";

import Header from "components/Header";

const DefaultTemplate: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default DefaultTemplate;
