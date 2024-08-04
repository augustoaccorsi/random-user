import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from '../pages/User/index';
import Home from '../pages/Home/index';
import DefaultLayout from '../layout/DefaultLayout';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
            </Route>
        </Routes>
    );
};

export default Router;
