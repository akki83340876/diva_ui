import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../Components/RegisterPage';
import ForgotPasswordPage from '../Components/ForgotPasswordPage';

const PageRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/loginpage' element={<LoginPage />} >
                <Route path='registerpage' element={<RegisterPage />} />
                <Route path='forgotpasswordpage' element={<ForgotPasswordPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default PageRoutes;