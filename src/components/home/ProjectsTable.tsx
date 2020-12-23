import React, { useContext } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { DataGrid, ColDef } from "@material-ui/data-grid";

import type { TypeProject } from "context/UserContext/types";
import { AppContext } from "context/AppContext";

interface Props {
    rows: TypeProject[];
    columns: ColDef[];
}

const ProjectsTable: React.FC<Props> = ({ rows, columns }) => {
    const classes = useStyles();
    const {
        appContext: { filter },
    } = useContext(AppContext);

    return (
        <div className={classes.dataGird}>
            <DataGrid
                rows={rows.filter((e) => e.project.includes(filter))}
                columns={columns}
                pageSize={5}
                checkboxSelection
                headerHeight={60}
            />
        </div>
    );
};

export default ProjectsTable;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dataGird: { height: 400, width: "90%" },
    })
);
