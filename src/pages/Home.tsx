import React from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import {
    Grid,
    Paper,
    List,
    ListItem,
    IconButton,
    InputBase,
} from "@material-ui/core";
import { DataGrid, ColDef, ValueGetterParams } from "@material-ui/data-grid";

import { Search as IconSearch } from "@material-ui/icons";

import DefaultTemplate from "styles/templates";

const columns: ColDef[] = [
    {
        field: "id",
        headerName: "ID",
        align: "center",
        headerAlign: "center",
        width: 70,
    },
    {
        field: "project",
        headerName: "Project",
        description: "Project's name",
        align: "center",
        headerAlign: "center",
        width: 400,
    },
    {
        field: "engineer",
        headerName: "Engineer",
        description: "Engineer's name",
        align: "center",
        headerAlign: "center",
        width: 250,
    },
    {
        field: "shipyard",
        headerName: "Shipyard",
        description: "Shipyard's name",
        align: "center",
        headerAlign: "center",
        width: 250,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        description: "When project was create",
        align: "center",
        headerAlign: "center",
        width: 130,
    },
    {
        field: "updatedAt",
        headerName: "Updated At",
        description: "Last time this project was changed",
        align: "center",
        headerAlign: "center",
        width: 160,
    },
];

const rows = [
    {
        id: 1,
        project: "Balsa Maneira",
        engineer: "Fulano da Silva",
        shipyard: "Rio Maguari",
        updatedAt: "20/02/2020",
        createdAt: "20/02/2020",
    },
    {
        id: 2,
        project: "Empurrador Maluco",
        shipyard: "Rio Maguari",
        engineer: "Cicrano dos Santos",
        updatedAt: "15/08/2009",
        createdAt: "13/07/2007",
    },
    {
        id: 3,
        project: "Draga Fodona",
        shipyard: "Rio Maguari",
        engineer: "Beltrano Borges",
        updatedAt: "09/02/2019",
        createdAt: "18/07/1998",
    },
];

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <DefaultTemplate>
            <Grid container direction="row" className={classes.gridContainer}>
                <Grid
                    container
                    item
                    xs={2}
                    justify="center"
                    alignItems="center"
                    className={classes.grid1}
                >
                    <Paper className={classes.paper}>
                        <List>
                            <ListItem>New Project</ListItem>
                            <ListItem>New Project</ListItem>
                            <ListItem>New Project</ListItem>
                        </List>
                    </Paper>
                </Grid>

                <Grid
                    container
                    item
                    xs={10}
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.grid2}
                >
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

                    <div className={classes.container}>
                        <div className={classes.dataGird}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                checkboxSelection
                                headerHeight={60}
                            />
                        </div>

                        <Paper className={classes.actionsList}>
                            <List className={classes.list}>
                                {rows.map((e) => (
                                    <ListItem className={classes.listItem}>
                                        OI
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </DefaultTemplate>
    );
};

export default Home;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridContainer: { height: `calc(100vh - 60px)` },
        grid1: {
            minWidth: "300px",
        },
        grid2: {
            padding: theme.spacing(3),
        },
        paper: {
            borderRadius: "0px",
            width: "100%",
            height: "100%",
        },
        container: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },
        dataGird: { height: 400, width: "90%" },
        actionsList: {
            borderRadius: "0px",
            width: "150px",
            paddingTop: "60px",
        },
        list: { margin: "0px", padding: "0px" },
        listItem: {
            height: "52px",
            margin: "0px",
            paddingTop: "0px",
            paddingBottom: "0px",
        },
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
        divider: {
            height: 28,
            margin: 4,
        },
    })
);
