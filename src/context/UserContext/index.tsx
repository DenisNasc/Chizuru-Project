import React, {createContext, useReducer} from 'react';

import UserContextReducer from './reducer';
import type {TypeUserState, TypeUserAction} from './types';

const initialState: TypeUserState = {
    id: '',
    email: '',
    name: '',
    token: '',
    projects: [],
};

export const UserContext = createContext<{
    userContext: TypeUserState;
    dispatch: React.Dispatch<TypeUserAction>;
}>({
    userContext: initialState,
    dispatch: () => {},
});

const UserContextProvider: React.FC = ({children}) => {
    const [userContextValue, setUserContextValue] = useReducer(UserContextReducer, initialState);

    return (
        <UserContext.Provider
            value={{
                userContext: userContextValue,
                dispatch: setUserContextValue,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
