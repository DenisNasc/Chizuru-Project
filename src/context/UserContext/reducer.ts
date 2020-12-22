import type { TypeUserContextReducer } from "./types";
import { USER_CREATE_PROJECT, USER_LOGIN, USER_LOGOUT } from "./actions";

const UserContextReducer: TypeUserContextReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_CREATE_PROJECT: {
            console.log(state);
            const projects = state.projects.concat({
                id: new Date().getTime(),
                createdAt: new Date(),
                updatedAt: new Date(),
                ...payload,
            });

            return { ...state, projects };
        }
        case USER_LOGOUT: {
            return { ...state, id: "", email: "", name: "", projects: [] };
        }
        case USER_LOGIN: {
            return { ...payload };
        }
        default: {
            return state;
        }
    }
};

export default UserContextReducer;
