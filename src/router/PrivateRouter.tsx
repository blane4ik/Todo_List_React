import React from 'react';
import ToDoList from '../pages/ToDoList/ToDoList';
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/todo"}/>} />
            <Route path="/todo" element={<ToDoList/>} />

            <Route path="*" element={<Navigate replace to="/todo" />} />
        </Routes>
    );
};

export default PrivateRouter;
