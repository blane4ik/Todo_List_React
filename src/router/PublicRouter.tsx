import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';

const PublicRouter = () => {
    return (
        <Routes>
            <Route index element={<Main/>} />

            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
};

export default PublicRouter;
