import type { TypeProject, TypeUserContextReducer } from "./types";
import {
    USER_CREATE_PROJECT,
    USER_EDIT_PROJECT,
    USER_DELETE_PROJECT,
    USER_LOGIN,
    USER_LOGOUT,
} from "./actions";

const UserContextReducer: TypeUserContextReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_CREATE_PROJECT: {
            const newProject: TypeProject = {
                id: new Date().getTime(),
                createdAt: new Date(),
                updatedAt: new Date(),
                ...payload,
            };

            const projects = state.projects.concat(newProject);

            return { ...state, projects };
        }

        case USER_EDIT_PROJECT: {
            const editedProject: TypeProject = { ...payload };
            return { ...state, projects: state.projects.concat(editedProject) };
        }

        case USER_DELETE_PROJECT: {
            const idFromDeletedProject: string = payload.id;
            const filtredProjects = state.projects.filter(
                (e) => e.id !== idFromDeletedProject
            );

            return { ...state, projects: filtredProjects };
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
