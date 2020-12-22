export type TypeProject = {
    id: string;
    project: string;
    engineer: string;
    shipyard: string;
    updatedAt: string;
    createdAt: string;
};

export type TypeUserAction = { type: string; payload: any };

export type TypeUserState = {
    id: string;
    email: string;
    name: string;
    token: string;
    projects: TypeProject[];
};

export type TypeUserContextReducer = (
    state: TypeUserState,
    action: TypeUserAction
) => TypeUserState;
