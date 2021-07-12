import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './reset.scss';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
