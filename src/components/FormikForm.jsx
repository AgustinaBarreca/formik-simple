import { Formik, Form, Field, ErrorMessage } from 'formik';

export const FormikForm = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  const validate = (values) => {
    const errors = {};
    if (values.password.length < 5)
      errors.password = 'Password must contain at least 5 digits';
    return errors;
  };

  return (
    <Formik
      initialValues={{
        user: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validate={validate}
    >
      <Form>
        <Field name="user" type="text" />
        <Field name="email" type="email" />
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
        <div>
          <button type="submit"> Send </button>
        </div>
      </Form>
    </Formik>
  );
};
