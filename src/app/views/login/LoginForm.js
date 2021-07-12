import React from 'react';
import { Formik, Form } from 'formik';

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
      }}
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
          <div>hello</div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
