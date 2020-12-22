import React from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { DataGrid, ColDef, ValueGetterParams } from "@material-ui/data-grid";

import type { TypeProject } from "context/UserContext/types";

interface Props {
    rows: TypeProject[];
    columns: ColDef[];
}

const ProjectsTable: React.FC<Props> = ({ rows, columns }) => {
    const classes = useStyles();

    return (
        <div className={classes.dataGird}>
            <DataGrid
                rows={rows}
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
