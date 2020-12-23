import React, {useState} from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';
import {Button, Grid, Paper, Typography} from '@material-ui/core';

import DefaultTemplate from 'styles/templates';

import FormLogin from 'components/login/FormLogin';
import FormSignup from 'components/login/FormSignup';

const Login: React.FC = () => {
    const classes = useStyles();

    const [login, setLogin] = useState(false);

    const handleClick = () => {
        setLogin(!login);
    };

    return (
        <DefaultTemplate>
            <Grid container>
                <Grid className={classes.grid} item container xs={8}>
                    <Paper className={classes.paper} elevation={0}>
                        <Typography variant="h5">NOME DO PROJETO</Typography>
                        <Typography className={classes.paragraf}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                            mollitia ad excepturi ratione, vitae aliquam, suscipit reprehenderit eum
                            facilis fugit nobis deserunt blanditiis. Illum nesciunt aut hic
                            laudantium, nihil quod?
                        </Typography>
                        <Typography variant="h5">Objetivos</Typography>
                        <Typography variant="body1" className={classes.paragraf}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                            mollitia ad excepturi ratione, vitae aliquam, suscipit reprehenderit eum
                            facilis fugit nobis deserunt blanditiis. Illum nesciunt aut hic
                            laudantium, nihil quod?
                        </Typography>
                        <Typography variant="h5">Agradecimentos</Typography>
                        <Typography variant="body1" className={classes.paragraf}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                            mollitia ad excepturi ratione, vitae aliquam, suscipit reprehenderit eum
                            facilis fugit nobis deserunt blanditiis. Illum nesciunt aut hic
                            laudantium, nihil quod?
                        </Typography>
                    </Paper>
                </Grid>
                <Grid className={classes.grid} item container xs={4}>
                    {login ? <FormLogin /> : <FormSignup />}

                    {login ? (
                        <Button className={classes.button} onClick={handleClick}>
                            Don&apos;t have an account? Sign Up now!
                        </Button>
                    ) : (
                        <Button className={classes.button} onClick={handleClick}>
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
            height: '100%',
            padding: theme.spacing(3),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        paper: {width: '100%', background: 'none'},
        paragraf: {},
        button: {
            width: '70%',
        },
    })
);
