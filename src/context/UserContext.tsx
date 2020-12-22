import React, { createContext } from "react";

export type TypeProject = {
    id: string;
    project: string;
    engineer: string;
    shipyard: string;
    updatedAt: string;
    createdAt: string;
};

export type TypeUser = {
    id: string;
    email: string;
    name: string;
    token: string;
    projects: TypeProject[];
};

const initialValue: TypeUser = {
    id: "d",
    email: "",
    name: "",
    token: "",
    projects: [
        {
            id: "1",
            project: "Balsa Maneira",
            engineer: "Fulano da Silva",
            shipyard: "Rio Maguari",
            updatedAt: "20/02/2020",
            createdAt: "20/02/2020",
        },
        {
            id: "2",
            project: "Empurrador Maluco",
            shipyard: "Rio Maguari",
            engineer: "Cicrano dos Santos",
            updatedAt: "15/08/2009",
            createdAt: "13/07/2007",
        },
        {
            id: "3",
            project: "Draga Fodona",
            shipyard: "Rio Maguari",
            engineer: "Beltrano Borges",
            updatedAt: "09/02/2019",
            createdAt: "18/07/1998",
        },
    ],
};

export const UserContext = createContext<{
    userContext: TypeUser;
    dispatch: React.Dispatch<React.SetStateAction<TypeUser>>;
}>({
    userContext: initialValue,
    dispatch: () => {},
});

const UserContextProvider: React.FC = ({ children }) => {
    const [userContextValue, setUserContextValue] = React.useState(
        initialValue
    );

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
