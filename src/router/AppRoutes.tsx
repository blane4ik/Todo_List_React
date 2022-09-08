import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import ToDoList from '../pages/ToDoList/ToDoList';
import AuthGuard from './guards/AuthGuard';
import { RoutesPath } from '../enums/routes-path.enum';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../components/Login/Login';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={RoutesPath.TODO} element={
                <AuthGuard>
                    <ToDoList/>
                </AuthGuard>
            } />
            <Route path={RoutesPath.LOGIN} element={<Main/>}>
                <Route index element={<Login/>}/>
                <Route path={RoutesPath.SIGN_UP} element={<SignUp/>}/>
            </Route>
            <Route path="*" element={<Navigate replace to={RoutesPath.TODO} />} />
        </Routes>
    );
};

export default AppRoutes;
