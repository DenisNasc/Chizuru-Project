export type TypeAppState = {
    darkMode: boolean;
    language: "pt-br" | "en";
    filter: string;
};

export type TypeAppAction = { type: string; payload: any };

export type TypeAppContextReducer = (
    state: TypeAppState,
    action: TypeAppAction
) => TypeAppState;
