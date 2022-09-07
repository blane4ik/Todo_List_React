import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import ToDoList from '../pages/ToDoList/ToDoList';
import AuthGuard from './guards/AuthGuard';
import { RoutesPath } from '../enums/routes-path.enum';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={RoutesPath.TODO} element={
                <AuthGuard>
                    <ToDoList/>
                </AuthGuard>
            } />
            <Route path={RoutesPath.LOGIN} element={<Main/>} />
            <Route path="*" element={<Navigate replace to={RoutesPath.TODO} />} />
        </Routes>
    );
};

export default AppRoutes;
