import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import darkTheme from "styles/themes/dark";
import lightTheme from "styles/themes/light";

import Header from "components/Header";

const DefaultTemplate: React.FC = ({ children }) => {
    const theme = false ? lightTheme : darkTheme;
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                {children}
            </ThemeProvider>
        </>
    );
};

export default DefaultTemplate;
