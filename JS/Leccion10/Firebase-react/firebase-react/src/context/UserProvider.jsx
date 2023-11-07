import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({children}) => {
    const [user, setUser] = useState(false);
    const userRegister = (email, password) => createUserWithEmailAndPassword(auth,email, password)

    return(
        <UserContext.Provider value={{user, setUser, userRegister}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;