import React, { useState } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { IconButton, Paper } from "@material-ui/core";
import {
    Brightness7 as IconBrightness7,
    Brightness4 as IconBrightness4,
} from "@material-ui/icons";

const Header: React.FC = () => {
    const classes = useStyles();
    const [darkMode, setDarkMode] = useState(false);

    const handleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Paper className={classes.paper}>
            Header
            <IconButton onClick={handleTheme}>
                {darkMode ? <IconBrightness4 /> : <IconBrightness7 />}
            </IconButton>
        </Paper>
    );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            height: "60px",
            margin: "0px",
            padding: "0px 320px",
            border: "none",
            display: "flex",
            alignItems: "center",
        },
    })
);
