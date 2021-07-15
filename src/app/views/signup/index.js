import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';

const Signup = () => (
  <div className="view signup">
    <div className="form-container">
      <div>
        <div className="welcome-info">
          <h2>Hello to</h2>
          <h1>Hell&apos;s Kitchen</h1>
        </div>
        <SignupForm />
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
          Member?
          {' '}
          <Link to="/auth/login">
            <span>Login now!</span>
          </Link>
        </h3>
      </div>
    </div>
  </div>
);

export default Signup;
