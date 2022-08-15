import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth'

export const PublicRouter = ({ children }) => {

    const { isAuthenticated } = useContext(AuthContext);

    return (!isAuthenticated)
        ? children
        : <Navigate to="/marvel" />
}
