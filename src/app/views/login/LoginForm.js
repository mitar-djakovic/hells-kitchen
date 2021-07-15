import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Input } from '../../components/atoms';
import { validationSchema } from './validationSchema';
import './styles.scss';

const LoginForm = () => {
  const lol = '';
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values, { setStatus, setSubmitting }) => {
        const { email, password } = values;
        console.log('email', email);
        console.log('password', password);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        status,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className="input-container">
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              placeholder="Email"
              value={values.email}
              name="email"
              errorMessage={errors.email}
              touched={touched.email && !values.email}
            />
          </div>
          <div className="input-container">
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              placeholder="Password"
              type="password"
              value={values.password}
              name="password"
              errorMessage={errors.password}
              touched={touched.password && !values.password}
            />
          </div>
          <div className="button-container">
            <Button
              type="submit"
              title={isSubmitting ? 'loading' : 'LOGIN'}
              fullWidth
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
