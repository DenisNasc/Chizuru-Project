import React from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import DefaultTemplate from "styles/templates";

const Login: React.FC = () => {
    return (
        <DefaultTemplate>
            <Grid container>
                <Grid item container xs={6}>
                    APRESENTAÇÃO
                </Grid>
                <Grid item container xs={6}>
                    LOGIN
                </Grid>
            </Grid>
        </DefaultTemplate>
    );
};

export default Login;

const useStyles = makeStyles((theme: Theme) => createStyles({}));
