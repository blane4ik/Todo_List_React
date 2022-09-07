import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import ToDoList from '../pages/ToDoList/ToDoList';
import AuthGuard from './guards/AuthGuard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={
                <AuthGuard>
                    <ToDoList/>
                </AuthGuard>
            } />
            <Route path="/login" element={<Main/>} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
