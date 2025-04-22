import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Private_routes = ({ children }) => {
    const user = localStorage.getItem("token");
    console.log(user);
    return user ? children : <Navigate to={"/admin/login"} />
}
export default Private_routes;