import React, { useState } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import {
    Avatar,
    Button,
    Divider,
    IconButton,
    Paper,
    Typography,
} from "@material-ui/core";
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
            <Typography>千鶴 PROJECT</Typography>
            <nav className={classes.nav}>
                <IconButton onClick={handleTheme}>
                    {darkMode ? <IconBrightness4 /> : <IconBrightness7 />}
                </IconButton>
                <Divider
                    orientation="vertical"
                    flexItem
                    className={classes.divider}
                />
                <Avatar className={classes.avatar} />
                <Button className={classes.logoutButton}>LOGOUT</Button>
            </nav>
        </Paper>
    );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            width: "100%",
            height: "60px",
            margin: "0px",
            padding: "0px 24px",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        nav: {
            display: "flex",
            alignItems: "center",
            margin: "0px",
            padding: "0px",
        },
        divider: {
            marginLeft: theme.spacing(3),
        },
        avatar: {
            marginLeft: theme.spacing(3),
        },
        logoutButton: {
            color: theme.palette.getContrastText(theme.palette.error.main),
            backgroundColor: theme.palette.error.main,
            marginLeft: theme.spacing(3),
        },
    })
);
