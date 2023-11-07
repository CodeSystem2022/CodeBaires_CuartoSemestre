import { useContext } from "react"; 
import {NavLink} from "react-router-dom";
import {UserContext} from "../context/UserProvider";

const Navbar = () => {
    const {user, setUser} = useContext(UserContext);

    return(
        <div>
            {user ? (
                <div>
                    <NavLink to="/home">Home</NavLink>
                    <button onClick={() => setUser(null)}>Logout</button>
                </div>
            ) : (
                <div>
                    <NavLink to="/login">Login</NavLink>
                </div>
            )}
        </div>
    );
}

export default Navbar;