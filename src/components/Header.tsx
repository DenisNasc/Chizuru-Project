import React, {useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';
import {Avatar, Button, Divider, IconButton, Paper, Typography} from '@material-ui/core';
import {Brightness7 as IconBrightness7, Brightness4 as IconBrightness4} from '@material-ui/icons';

import {UserContext} from 'context/UserContext';
import {USER_LOGOUT} from 'context/UserContext/actions';

import {AppContext} from 'context/AppContext';
import {APP_CHANGE_THEME} from 'context/AppContext/actions';

const Header: React.FC = () => {
    const classes = useStyles();

    const history = useHistory();
    const params = useParams<{userId: string}>();

    const {
        userContext: {id},
        dispatch: dispatchUser,
    } = useContext(UserContext);

    const {
        appContext: {darkMode},
        dispatch: dispatchApp,
    } = useContext(AppContext);

    const handleTheme = () => {
        dispatchApp({type: APP_CHANGE_THEME, payload: {}});
    };

    const handleAvatarClick = () => {
        history.push(`/${params.userId}/profile`);
    };

    const handleLogoutClick = () => {
        dispatchUser({type: USER_LOGOUT, payload: {}});
    };

    return (
        <Paper className={classes.paper}>
            <Typography>千鶴 PROJECT</Typography>
            <nav className={classes.nav}>
                <IconButton onClick={handleTheme}>
                    {darkMode ? <IconBrightness4 /> : <IconBrightness7 />}
                </IconButton>
                {id && (
                    <>
                        <Divider orientation="vertical" flexItem className={classes.divider} />
                        <Avatar className={classes.avatar} onClick={handleAvatarClick} />
                        <Button className={classes.logoutButton} onClick={handleLogoutClick}>
                            LOGOUT
                        </Button>
                    </>
                )}
            </nav>
        </Paper>
    );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            width: '100%',
            height: '60px',
            margin: '0px',
            padding: '0px 24px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            margin: '0px',
            padding: '0px',
        },
        divider: {
            marginLeft: theme.spacing(3),
        },
        avatar: {
            marginLeft: theme.spacing(3),
        },
        logoutButton: {
            color: theme.palette.getContrastText(theme.palette.error.main),
            backgroundColor: theme.palette.error.main,
            marginLeft: theme.spacing(3),
        },
    })
);
