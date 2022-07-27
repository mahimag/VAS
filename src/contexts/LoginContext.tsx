import React, { createContext, useState } from "react";

export interface ContextInterface{
    isLoggedIn: boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

interface props{
    children: JSX.Element;
}

export const LoginContext = createContext<ContextInterface | null>(null)

export const LoginProvider = (props: props) => {
    const { children } = props;
    const[isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const ctxValue = {
        isLoggedIn,
        setIsLoggedIn
    };
    //can use all values of children
    return <LoginContext.Provider value = {ctxValue}>{children}</LoginContext.Provider>
}
