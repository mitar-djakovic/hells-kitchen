import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginView = () => (
  <div className="view login">
    <div className="form-container">
      <div>
        <div className="welcome-info">
          <h2>Welcome back to</h2>
          <h1>Hell&apos;s Kitchen</h1>
        </div>
        <LoginForm />
      </div>
    </div>
    <div className="info-container">
      <div>
        <h1>Hell&apos;s Kitchen</h1>
        <h2>
          Social media platform
          {' '}
          <br />
          {' '}
          for comic books lovers.
        </h2>
        <h3>
          Not a member?
          {' '}
          <Link to="/auth/signup">
            <span>Join now</span>
          </Link>
        </h3>
      </div>
    </div>
  </div>
);

export default LoginView;
