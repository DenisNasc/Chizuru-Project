import React from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ColDef, ValueGetterParams } from "@material-ui/data-grid";

import DefaultTemplate from "styles/templates";

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

const rows: TypeProject[] = [
    {
        id: "1",
        project: "Balsa Maneira",
        engineer: "Fulano da Silva",
        shipyard: "Rio Maguari",
        updatedAt: "20/02/2020",
        createdAt: "20/02/2020",
    },
    {
        id: "2",
        project: "Empurrador Maluco",
        shipyard: "Rio Maguari",
        engineer: "Cicrano dos Santos",
        updatedAt: "15/08/2009",
        createdAt: "13/07/2007",
    },
    {
        id: "3",
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
                        <ProjectsTable columns={columns} rows={rows} />
                        <ActionsColumn rows={rows} />
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
