import React, { useContext } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import DefaultTemplate from "styles/templates";

import { UserContext } from "context/UserContext";

import LateralMenu from "components/home/LateralMenu";
import SearchFIeld from "components/home/SearchFIeld";
import ProjectsTable from "components/home/ProjectsTable";

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

                    <ProjectsTable rows={projects} />
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
        table: {},
    })
);
