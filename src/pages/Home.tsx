import React, { useContext } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ColDef, ValueGetterParams } from "@material-ui/data-grid";

import DefaultTemplate from "styles/templates";

import { UserContext } from "components/App";

import LateralMenu from "components/home/LateralMenu";
import SearchFIeld from "components/home/SearchFIeld";
import ProjectsTable from "components/home/ProjectsTable";
import ActionsColumn from "components/home/ActionsColumn";

export type TypeProject = {
    id: string;
    project: string;
    engineer: string;
    shipyard: string;
    updatedAt: string;
    createdAt: string;
};

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

const Home: React.FC = () => {
    const classes = useStyles();
    const {
        userContext: { projects },
    } = useContext(UserContext);

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
                    <LateralMenu />
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
                    <SearchFIeld />

                    <div className={classes.container}>
                        <ProjectsTable columns={columns} rows={projects} />
                        <ActionsColumn rows={projects} />
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
        container: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },
    })
);
