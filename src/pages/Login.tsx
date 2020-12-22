import React, { useState } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Grid, Container } from "@material-ui/core";

import DefaultTemplate from "styles/templates";

import FormLogin from "components/login/FormLogin";
import FormSignup from "components/login/FormSignup";

const Login: React.FC = () => {
    const classes = useStyles();

    const [login, setLogin] = useState(false);

    const handleClick = () => {
        setLogin(!login);
    };

    return (
        <DefaultTemplate>
            <Grid container>
                <Grid className={classes.grid} item container xs={6}>
                    APRESENTAÇÃO
                </Grid>
                <Grid className={classes.grid} item container xs={6}>
                    {login ? <FormLogin /> : <FormSignup />}

                    {login ? (
                        <Button
                            className={classes.button}
                            onClick={handleClick}
                        >
                            Don't have an account? Sign Up now!
                        </Button>
                    ) : (
                        <Button
                            className={classes.button}
                            onClick={handleClick}
                        >
                            Already has an account? Login!
                        </Button>
                    )}
                </Grid>
            </Grid>
        </DefaultTemplate>
    );
};

export default Login;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grid: {
            height: "100%",
            padding: theme.spacing(3),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },

        button: {
            width: "50%",
        },
    })
);
