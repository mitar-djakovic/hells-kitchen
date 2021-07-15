import React from 'react';
import classnames from 'classnames';
import './styles.scss';

export default ({
  fullWidth,
  placeholder,
  type = 'text',
  value,
  onChange,
  name,
  errorMessage,
  touched,
  onBlur,
  icon,
}) => (
  <div className="input-wrapper">
    <input
      className={classnames('input', { fullWidth })}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      id={name}
    />
    {touched !== undefined && (
      <div
        className={classnames('message-container', {
          error: touched !== undefined,
          success: !errorMessage && value,
        })}
      >
        <p>
          <span>{icon}</span>
          {errorMessage || 'Input is valid.'}
        </p>
      </div>
    )}
  </div>
);
