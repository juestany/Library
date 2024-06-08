import React, { useEffect, useState, useCallback, useMemo } from "react";
import { TextField, Button, Grid, Box, Container } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import MenuAppBar from "../MenuAppBar";
import User from "./User";
import { useApi } from "../../api/ApiProvider";
import {useLanguage} from "../../api/LanguageProvider";

function UsersList() {
    const apiClient = useApi();
    const [users, setUsers] = useState<User[]>([]);
    // @ts-ignore
    const { language } = useLanguage();

    const onSubmit = useCallback(
        (values: User, formik: any) => {
            apiClient.addUser(values).then((response) => {
                console.log(response);
                if (response.success) {
                    setUsers([...users, response.data]);
                    formik.resetForm();
                } else {
                    console.error('Error adding user');
                }
            });
        },
        [apiClient, users]
    );

    const validationSchema = useMemo(
        () =>
            yup.object().shape({
                username: yup.string().required('Username is required'),
                email: yup.string().email('Invalid email format').required('Email is required'),
                name: yup.string().required('Name is required'),
                role: yup.string().required('Role is required'),
                password: yup.string().required('Password is required'),
            }),
        []
    );

    useEffect(() => {
        apiClient.getUsers().then((response) => {
            console.log(response.data);
            setUsers(response.data);
        });
    }, [apiClient]);

    return (
        <>
            <MenuAppBar/>
            <h1>{language === 'English' ? 'Users' : 'Użytkownicy'}</h1>
            <Container style={{marginTop: '2rem'}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>{language === 'English' ? 'Username' : 'Nazwa użytkownika'}</th>
                        <th>E-mail</th>
                        <th>{language === 'English' ? 'Name' : 'Imię'}</th>
                        <th>{language === 'English' ? 'Role' : 'Rola'}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.length > 0 && users.map(user => (
                        <User
                            key={user.id}
                            id={user.id}
                            username={user.username}
                            email={user.email}
                            name={user.name}
                            role={user.role}
                        />
                    ))}
                    </tbody>
                </table>
                <Box mt={4}>
                    <h3>{language === 'English' ? 'Add a User' : 'Dodaj użytkownika'}</h3>
                    <Formik
                        initialValues={{
                            id: 0,
                            username: '',
                            email: '',
                            name: '',
                            role: '',
                        }}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                        validateOnChange
                        validateOnBlur
                    >
                        {(formik: any) => (
                            <form onSubmit={formik.handleSubmit} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label={language === 'English' ? 'Username' : 'Nazwa użytkownika'}
                                            name="username"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.username && !!formik.errors.username}
                                            helperText={formik.touched.username && formik.errors.username}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.email && !!formik.errors.email}
                                            helperText={formik.touched.email && formik.errors.email}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label={language === 'English' ? 'Name' : 'Imię'}
                                            name="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.name && !!formik.errors.name}
                                            helperText={formik.touched.name && formik.errors.name}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label={language === 'English' ? 'Role' : 'Rola'}
                                            name="role"
                                            value={formik.values.role}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.role && !!formik.errors.role}
                                            helperText={formik.touched.role && formik.errors.role}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label={language === 'English' ? 'Password' : 'Hasło'}
                                            name="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.password && !!formik.errors.password}
                                            helperText={formik.touched.password && formik.errors.password}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Box mt={2} style={{marginBottom: '2rem'}}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            disabled={!(formik.isValid && formik.dirty)}
                                        >
                                            {language === 'English' ? 'Add a user' : 'Dodaj użytkownika'}
                                        </Button>
                                    </Box>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </>
    );
}

export default UsersList;
