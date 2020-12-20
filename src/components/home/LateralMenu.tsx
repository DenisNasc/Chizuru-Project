import React from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Paper, List, ListItem } from "@material-ui/core";

const LateralMenu: React.FC = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <Button className={classes.buttonNewProject}>
                        New project
                    </Button>
                </ListItem>
            </List>
        </Paper>
    );
};

export default LateralMenu;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            borderRadius: "0px",
            width: "100%",
            height: "100%",
        },
        list: {
            margin: "0px",
            padding: "0px",
        },
        listItem: {
            margin: "0px",
            padding: "0px",
        },
        buttonNewProject: {
            width: "100%",
            borderRadius: "24px",
            margin: theme.spacing(3),
            background: theme.palette.success.main,
            "&:hover": { background: theme.palette.success.main, opacity: 0.7 },
        },
    })
);
