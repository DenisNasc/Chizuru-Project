import React, { useContext } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import darkTheme from "styles/themes/dark";
import lightTheme from "styles/themes/light";

import { AppContext } from "context/AppContext";

const StyleProvider: React.FC = ({ children }) => {
    const {
        appContext: { darkMode },
    } = useContext(AppContext);

    const theme = darkMode ? darkTheme : lightTheme;
    console.log(theme);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default StyleProvider;
