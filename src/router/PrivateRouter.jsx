import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth'

export const PrivateRouter = ({ children }) => {

    const { isAuthenticated } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (isAuthenticated)
        ? children
        : <Navigate to="/login" />
}
