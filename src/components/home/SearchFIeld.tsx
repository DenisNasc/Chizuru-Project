import React from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

import { Paper, IconButton, InputBase } from "@material-ui/core";
import { Search as IconSearch } from "@material-ui/icons";

const SearchFIeld: React.FC = () => {
    const classes = useStyles();
    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search for projects"
                inputProps={{ "aria-label": "search projects" }}
            />
            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
            >
                <IconSearch />
            </IconButton>
        </Paper>
    );
};

export default SearchFIeld;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "2px 4px",
            marginBottom: theme.spacing(3),
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "50%",
            alignSelf: "flex-start",
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
    })
);
