import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';

const LoginForm = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Typography variant="h4">Login</Typography>
                    <Field
                        as={TextField}
                        type="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={!!isSubmitting}
                        helperText={<ErrorMessage name="email" />}
                    />
                    <Field
                        as={TextField}
                        type="password"
                        name="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={!!isSubmitting}
                        helperText={<ErrorMessage name="password" />}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
