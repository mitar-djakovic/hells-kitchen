import { css } from '@emotion/react';
import loginImage from '../../assets/login.png';

export const view = css`
  width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  background-color: #000;
`;

export const login = css`
  background-image: url('${loginImage}');
  background-size: cover;
`;

export const infoContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  h1 {
    font-size: 52px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 32px;
    line-height: 1.2;
  }

  h3 {
    font-size: 22px;
    margin-top: 30px;

    a {
      text-decoration: none;
      color: #fff;
    }
    span {
      background-color: #e50914;
      padding: 2px 6px;
      margin-left: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

export const formContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 20vh;

  .welcome-info {
    margin-bottom: 40px;
    color: #fff;

    h2 {
      font-size: 22px;
      line-height: 2;
    }
    h1 {
      font-size: 52px;
      font-weight: 600;
    }
  }
`;
