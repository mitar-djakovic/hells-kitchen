import React from 'react';
import classnames from 'classnames';
import './styles.scss';

export default ({ title, fullWidth }) => (
  <button className={classnames('button', { fullWidth })} type="submit">
    {title}
  </button>
);
