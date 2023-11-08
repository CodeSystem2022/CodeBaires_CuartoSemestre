import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { Navigate, Outlet } from "react-router-dom";

const LayoutRequireAuth = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="container mx-auto px-4">
            <Outlet />
        </div>
    );
};

export default LayoutRequireAuth;