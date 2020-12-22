import React, { useState, useContext } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import {
    Button,
    Collapse,
    Paper,
    List,
    ListItem,
    IconButton,
    Typography,
} from "@material-ui/core";
import { Close as IconClose, Check as IconCheck } from "@material-ui/icons";

import { UserContext } from "context/UserContext";
import { USER_CREATE_PROJECT } from "context/UserContext/actions";

import FormInput from "components/shared/FormInput";

const LateralMenu: React.FC = () => {
    const classes = useStyles();
    const { dispatch } = useContext(UserContext);

    const [formValues, setFormValues] = useState({
        project: "",
        engineer: "",
        shipyard: "",
    });

    const [isOpen, setIsOpen] = useState(false);

    const openCloseCollapse = () => {
        setIsOpen(!isOpen);
    };

    const createNewProject = (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();
        // VERIFICAR SE OS DADOS DO NOVO PROJETO ESTÃO VÁLIDOS
        // ENVIAR OS DADOS DO NOVO PROJETO PARA O BANCO DE DADOS
        // RECEBER A NOVA LISTA DE PROJETOS

        // ENVIAR A NOVA LISTA DE PROJETOS PRO REDUCER USER
        dispatch({ type: USER_CREATE_PROJECT, payload: { ...formValues } });
    };

    return (
        <Paper className={classes.paper}>
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <Button
                        className={classes.buttonNewProject}
                        onClick={openCloseCollapse}
                        disabled={isOpen}
                    >
                        New project
                    </Button>
                </ListItem>
                <Collapse
                    in={isOpen}
                    className={classes.collapse}
                    timeout="auto"
                    unmountOnExit
                >
                    <Paper
                        component="form"
                        className={classes.collapsePaper}
                        onSubmit={createNewProject}
                    >
                        <Typography className={classes.collapseTitle}>
                            Create new project
                        </Typography>

                        <FormInput
                            id="project"
                            label="Project Name"
                            type="text"
                            required
                            values={formValues}
                            setValue={setFormValues}
                        />
                        <FormInput
                            id="engineer"
                            label="Engineer"
                            type="text"
                            required
                            values={formValues}
                            setValue={setFormValues}
                        />
                        <FormInput
                            id="shipyard"
                            label="Shipyard"
                            type="text"
                            required
                            values={formValues}
                            setValue={setFormValues}
                        />
                        <div className={classes.collapseActions}>
                            <IconButton
                                onClick={openCloseCollapse}
                                disableFocusRipple
                                disabled={!isOpen}
                                className={classes.buttonClose}
                            >
                                <IconClose />
                            </IconButton>
                            <IconButton
                                disableFocusRipple
                                disabled={!isOpen}
                                className={classes.buttonCheck}
                                type="submit"
                            >
                                <IconCheck />
                            </IconButton>
                        </div>
                    </Paper>
                </Collapse>
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
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
        collapse: {
            width: "90%",
        },
        collapsePaper: {},
        collapseTitle: { textAlign: "center" },
        collapseActions: { display: "flex", justifyContent: "flex-end" },
        buttonClose: { color: theme.palette.error.main },
        buttonCheck: { color: theme.palette.success.main },
    })
);
