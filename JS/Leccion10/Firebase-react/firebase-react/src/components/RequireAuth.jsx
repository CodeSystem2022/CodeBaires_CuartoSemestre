import { useContext } from "react";
import {UserContext} from "../context/UserProvider";
import {Navigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({children}) => {
    const {user} = useContext(UserContext);

    if(!user){
        return <Navigate to="/login"/>;
    }
    return children;
}

export default RequireAuth;