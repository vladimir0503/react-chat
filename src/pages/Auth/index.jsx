import React from 'react';
import { Block } from '../../components';
import { LoginForm, RegisterForm } from '../../modules';
import { Routes, Route } from 'react-router-dom';

import './Auth.scss';

const Auth = () => {

    const handleLogin = values => {
        console.log('Success:', values);
    };

    const handleReg = values => {
        console.log('Success:', values);
    };

    return (
        <section className='auth'>
            <div className='auth__content'>
                <Routes>
                    <Route path='/' element={<LoginForm submit={handleLogin} />} />
                    <Route path='/login' element={<LoginForm submit={handleLogin} />} />
                    <Route path='/register' element={<RegisterForm submit={handleReg} />} />
                </Routes>
            </div>
        </section>
    );
};

export default Auth;