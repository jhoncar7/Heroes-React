import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    isAuthenticated: false,
    user: {}
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        ...initialState,
        isAuthenticated: !!user,
        user
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: new Date().getTime(),
                name
            }
        }

        localStorage.setItem('user', JSON.stringify(action.payload));

        dispatch(action);
    }

    const logout = () => {
        const action = {
            type: types.logout
        }

        localStorage.removeItem('user');

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
