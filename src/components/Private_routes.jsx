import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// get token from Cookie
const getCookie = name => document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];




const Private_routes = ({ children }) => {
    const token = getCookie("WeddingPlanAdminToken");

    return token ? children : <Navigate to={"/login"} />
}
export default Private_routes;