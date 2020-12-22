import React from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper, List, ListItem, IconButton } from "@material-ui/core";
import { Delete as IconDelete, Edit as IconEdit } from "@material-ui/icons";

import type { TypeProject } from "context/UserContext/types";

interface Props {
    rows: TypeProject[];
}

const ActionsColumn: React.FC<Props> = ({ rows }) => {
    const classes = useStyles();
    const deleteProject = (type: "delete" | "edit", id: number | string) => {
        console.log(type, id);
    };
    return (
        <Paper className={classes.actionsList}>
            <List className={classes.list}>
                {rows.map(({ id }) => (
                    <ListItem className={classes.listItem}>
                        <IconButton
                            className={classes.deleteButton}
                            onClick={() => deleteProject("delete", id)}
                        >
                            <IconDelete />
                        </IconButton>

                        <IconButton
                            className={classes.editButton}
                            onClick={() => deleteProject("edit", id)}
                        >
                            <IconEdit />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default ActionsColumn;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        actionsList: {
            borderRadius: "4px",
            width: "150px",
            paddingTop: "60px",
        },
        list: { margin: "0px", padding: "0px", background: "none" },
        listItem: {
            height: "52px",
            margin: "0px",
            paddingTop: "0px",
            paddingBottom: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        deleteButton: {
            color: theme.palette.error.main,
        },
        editButton: {
            color: theme.palette.grey.A100,
        },
    })
);
