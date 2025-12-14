import { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const[user, setUser] = useState(()=>{
        try {
            const storedUser = localStorage.getItem('user');
            return storedUser? JSON.parse(storedUser):null;
        } catch (error) {
            localStorage.removeItem('user');
            return null;
        }
    });

    const login = (token,userData)=>{
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    }

    const logout = () => {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};