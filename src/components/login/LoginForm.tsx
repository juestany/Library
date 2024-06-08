import { Button, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Formik } from 'formik';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {useApi} from "../../api/ApiProvider";

function LoginForm() {
const navigate = useNavigate();
const apiClient = useApi();

// pomysl nad tym
const onSubmit = useCallback(
    (values: { username: string; password: string }, formik: any) => {
        apiClient.login(values).then((response) => {
            console.log(response);
            if (response.success) {
                navigate('/api/home');
            } else {
                formik.setFieldError('username', 'Invalid username or password');
            }
        });
    },
    [apiClient, navigate],
);

    const validationSchema = useMemo(
        () =>
            yup.object().shape({
                username: yup.string().required('Required'),
                password: yup
                    .string()
                    .required('Required')
                    .min(5, 'Password too short'),
            }),
        [],
    );

    return (
        <>
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange
            validateOnBlur
        >
            {(formik: any) => (
                <form
                    className="Login-form"
                    id="singForm"
                    onSubmit={formik.handleSubmit}
                    noValidate
                >
                    <h1>Library</h1>
                    <TextField
                        id="username"
                        label="Username"
                        variant="standard"
                        name="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && !!formik.errors.username}
                        helperText={formik.touched.username && formik.errors.username}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="standard"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && !!formik.errors.password}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button
                        variant="contained"
                        startIcon={<LoginIcon/>}
                        type="submit"
                        form="singForm"
                        disabled={!(formik.isValid && formik.dirty)}
                    >
                        Log in
                    </Button>
                </form>
            )}
        </Formik>
        </>
    );
}

export default LoginForm;