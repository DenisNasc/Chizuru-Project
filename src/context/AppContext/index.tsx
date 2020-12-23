import React, {createContext, useReducer} from 'react';

import AppContextReducer from './reducer';
import type {TypeAppState, TypeAppAction} from './types';

const initialState: TypeAppState = {
    darkMode: false,
    language: 'pt-br',
    filter: '',
};

export const AppContext = createContext<{
    appContext: TypeAppState;
    dispatch: React.Dispatch<TypeAppAction>;
}>({
    appContext: initialState,
    dispatch: () => {},
});

const AppContextProvider: React.FC = ({children}) => {
    const [AppContextValue, setAppContextValue] = useReducer(AppContextReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                appContext: AppContextValue,
                dispatch: setAppContextValue,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
