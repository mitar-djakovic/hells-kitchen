import React from 'react';
import { Formik, Form } from 'formik';
import classnames from 'classnames';
import { Button, Input } from '../../components/atoms';
import { validationSchema } from './validationSchema';
import './styles.scss';

const SignupForm = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      repeatPassword: '',
    }}
    onSubmit={async (values, { setStatus, setSubmitting }) => {
      const { email, password, repeatPassword } = values;
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
        <div className="input-container">
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            placeholder="Repeat password"
            type="password"
            value={values.repeatPassword}
            name="repeatPassword"
            errorMessage={errors.repeatPassword}
            touched={touched.repeatPassword && !values.repeatPassword}
          />
        </div>
        <div className="button-container">
          <Button
            type="submit"
            title={isSubmitting ? 'loading' : 'SIGNUP'}
            fullWidth
          />
        </div>
      </Form>
    )}
  </Formik>
);

export default SignupForm;
