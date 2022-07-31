import React, { useContext } from "react";
import { ContextInterface, LoginContext } from "../contexts/LoginContext";

const Profile: React.FC = () => {
    const { isLoggedIn, setIsLoggedIn} = useContext(LoginContext) as ContextInterface;
    return(
        <>
            <h1> Profile </h1>
            <h2> Username: {isLoggedIn} </h2>
        </>
    );
}

export default Profile;