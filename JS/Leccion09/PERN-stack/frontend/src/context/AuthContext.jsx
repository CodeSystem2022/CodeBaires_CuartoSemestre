import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie";
import axios from "../api/axios"

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
// eslint-disable-next-line react/prop-types
export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    const signin = async (data) => {
        try{
            const res = await axios.post("/signin",data);
                setUser(res.data);
                setIsAuth(true);
            return res.data;
        
        } catch(error){
            console.log(error);
            if(Array.isArray(error.response.data)){
                return setErrors(error.response);
            }
        setErrors([error.response.data.message]);
        }
    }

    const signup = async (data) => {
        try{
            const res = await axios.post("/signup", data);
                setUser(res.data);
                setIsAuth(true);
            return res.data;
        } catch(error){
            console.log(error);
            if(Array.isArray(error.response.data)){
                return setErrors(error.response);
            }
        setErrors([error.response.data.message]);
        }
    };

    const singout = async (data) => {
        try{
            const res = await axios.post("/signout", data);
                setUser(null);
                setIsAuth(false);
            return res.data;
        } catch(error){
            console.log(error);
            if(Array.isArray(error.response.data)){
                return setErrors(error.response);
            }
        setErrors([error.response.data.message]);
        }
    };

        useEffect(() => {
            setLoading(true);
            if (Cookie.get('token')){
                axios.get("/profile")
                .then((res) => {
                    setUser(res.data);
                    setIsAuth(true);
                    setLoading(false);
                }).catch((error) => {
                    setUser(null);
                    setIsAuth(false);
                    setLoading(false);
                    console.log(error);
                });
            }
            setLoading(false);
        }, []);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setErrors(null);
            }, 4000);
            return() => clearTimeout(timeout);
        }, [errors]);

    return <AuthContext.Provider value={{
        user,
        isAuth,
        errors,
        signup,
        signin,
        setUser,
        singout,
        loading,
    }}>
        {children}
    </AuthContext.Provider>

}