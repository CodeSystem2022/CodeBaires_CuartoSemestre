import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({children}) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(auth,(user) => {
            console.log(user);
            if (user) {
                const {email, photoURL, displayName, uid} = user
                setUser(email, photoURL, displayName, uid);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    
    const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
    
    const signOutUser = () => signOut(auth);

    return(
        <UserContext.Provider value={{user, setUser, registerUser, loginUser, signOutUser}}>
            {children}
        </UserContext.Provider>
    );
}

UserProvider.PropTypes = {
    children: PropTypes.node.isRequired
}

export default UserProvider;