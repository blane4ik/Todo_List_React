import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from '../../store/selectors/user-selectors';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }: any) => {
    const isLoggedIn = useSelector(selectUserIsLoggedIn);

    return (
        isLoggedIn ? (
            children
        ) : (
            <Navigate replace to="/login" />
        )
    );
};

export default AuthGuard;