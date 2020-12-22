import type { TypeUserContextReducer } from "./types";
import { USER_CREATE_PROJECT, USER_LOGOUT } from "./actions";

const UserContextReducer: TypeUserContextReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_CREATE_PROJECT: {
            const projects = state.projects.concat({
                id: `${
                    Number(state.projects[state.projects.length - 1].id) + 1
                }`,
                createdAt: new Date(),
                updatedAt: new Date(),
                ...payload,
            });

            return { ...state, projects };
        }
        case USER_LOGOUT: {
            return { ...state, id: "", email: "", name: "", projects: [] };
        }
        default: {
            return state;
        }
    }
};

export default UserContextReducer;
