import React from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper, IconButton } from "@material-ui/core";
import { Delete as IconDelete, Edit as IconEdit } from "@material-ui/icons";

interface Props {
    id: string;
}

const ActionsColumn: React.FC<Props> = ({ id }) => {
    const classes = useStyles();

    const deleteProject = (id: string) => {
        console.log("delete", id);
        // DELETER O PROJETO NO BANCO DE DADOS
        // RECEBER A NOVA LISTA DE PROJETOS DO BANCO DE DADOS
        // ENVIAR A NOVA LISTA DE PROJETOS PRO REDUCER USER
    };

    const editProject = (id: string) => {
        console.log("edit", id);
        // ENVIAR OS DADOS EDITADOS PARA O BANCO DE DADOS
        // RECEBER A NOVA LISTA DE PROJETOS DO BANCO DE DADOS
        // ENVIAR A NOVA LISTA DE PROJETOS PRO REDUCER USER
    };

    return (
        <div className={classes.actions}>
            <IconButton
                className={classes.deleteButton}
                onClick={() => deleteProject(id)}
            >
                <IconDelete />
            </IconButton>

            <IconButton
                className={classes.editButton}
                onClick={() => editProject(id)}
            >
                <IconEdit />
            </IconButton>
        </div>
    );
};

export default ActionsColumn;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        actions: { display: "flex", justifyContent: "space-around" },
        deleteButton: {
            color: theme.palette.error.main,
        },
        editButton: {
            color: theme.palette.grey.A100,
        },
    })
);
