import React from 'react';
import useFirebase from '../hooks/useFirebase';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const { user } = useFirebase();
    const location = useLocation();

    return user ? children : <Navigate to="/login" replace state={{from: location}}></Navigate>
};

export default RequireAuth;