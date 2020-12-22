import React, { useState } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

import { Paper, IconButton, InputBase } from "@material-ui/core";
import { Search as IconSearch } from "@material-ui/icons";

const SearchFIeld: React.FC = () => {
    const classes = useStyles();
    const [filter, setFilter] = useState("");

    const handleFilter = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = event.target;
        setFilter(value);
    };

    const filterProjectsByName = (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <Paper
            component="form"
            className={classes.root}
            onSubmit={filterProjectsByName}
        >
            <InputBase
                className={classes.input}
                placeholder="Search for projects"
                inputProps={{ "aria-label": "search projects" }}
                value={filter}
                onChange={handleFilter}
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
