import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import { Outlet } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <Outlet />
    </div>
  );
};

export default LoginPage;
