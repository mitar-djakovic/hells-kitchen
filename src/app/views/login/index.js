import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import {
  view, login, formContainer, infoContainer,
} from './style';

const LoginView = () => (
  <div
    css={css`
      ${view} ${login}
    `}
  >
    <div
      css={css`
        ${formContainer}
      `}
    >
      <div>
        <div className="welcome-info">
          <h2>Welcome back to</h2>
          <h1>Hell&apos;s Kitchen</h1>
        </div>
      </div>
    </div>
    <div
      css={css`
        ${infoContainer}
      `}
    >
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
