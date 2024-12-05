import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children
    }


    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}