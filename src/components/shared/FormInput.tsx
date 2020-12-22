import React from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

interface Props {
    id: string;
    label: string;
    required?: boolean;
    type?: string;
    setValue: React.Dispatch<React.SetStateAction<any>>;
    values: any;
}

const FormInput: React.FC<Props> = ({
    id,
    label,
    required,
    type = "text",
    values,
    setValue,
}) => {
    const classes = useStyles();

    const handleTextInput = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const { value } = event.target;
        console.log(id, value, values);
        setValue({ ...values, [id]: value });
    };

    return (
        <TextField
            className={classes.textField}
            id={id}
            label={label}
            type={type}
            required={required}
            value={values[id]}
            onChange={handleTextInput}
        />
    );
};

export default FormInput;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            width: "100%",
            marginBottom: theme.spacing(3),
        },
    })
);
