import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4">
      <div>
        <label htmlFor="username" className="block">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-1"
        />
      </div>
      <div>
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-1"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
