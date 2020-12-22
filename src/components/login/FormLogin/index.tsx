import React, { useState } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Divider, Paper, Typography } from "@material-ui/core";

import FormInput from "components/shared/FormInput";

const FormLogin = () => {
    const classes = useStyles();

    const [formValues, setFormValues] = useState({ email: "", password: "" });

    const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();

        console.log(formValues);
    };

    return (
        <Paper
            className={classes.form}
            component="form"
            elevation={0}
            onSubmit={handleSubmit}
        >
            <Typography className={classes.typography}>Login</Typography>
            <Divider className={classes.divider} />
            <FormInput
                id="email"
                label="Email"
                type="email"
                required
                values={formValues}
                setValue={setFormValues}
            />
            <FormInput
                id="password"
                label="Password"
                type="password"
                required
                values={formValues}
                setValue={setFormValues}
            />
            <Button type="submit">Submit</Button>
        </Paper>
    );
};

export default FormLogin;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            borderRadius: "0px",
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: theme.spacing(3),
        },
        typography: {
            alignSelf: "flex-start",
            marginBottom: theme.spacing(1),
        },
        divider: { width: "100%", height: "1px" },
    })
);
