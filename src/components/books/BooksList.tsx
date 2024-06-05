import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Book from './Book';
import axios from 'axios';
import * as yup from 'yup';
import MenuAppBar from "../MenuAppBar";
import { TextField, Button, Grid, Box, Container } from '@mui/material'
import {useApi} from "../../api/ApiProvider";
import {Formik} from "formik";

function BooksList() {

    const apiClient = useApi();
    const [books, setBooks] = useState<Book[]>([]);

    const onSubmit = useCallback(
        (values: Book, formik: any) => {
            apiClient.addBook(values).then((response) => {
                console.log(response);
                if (response.success) {
                    setBooks([...books, response.data]);
                    formik.resetForm();
                } else {
                    console.error('Error adding book');
                }
            });
        },
        [apiClient]
    );

    const validationSchema = useMemo(
        () =>
            yup.object().shape({
                isbn: yup.string().required('ISBN is required'),
                title: yup.string().required('Title is required'),
                author: yup.string().required('Author is required'),
                publisher: yup.string().required('Publisher is required'),
                publicationYear: yup
                    .number()
                    .required('Publication Year is required')
                    .min(0, 'Publication Year must be a positive number'),
                availableCopies: yup
                    .number()
                    .required('Available Copies is required')
                    .min(0, 'Available Copies must be a positive number'),
            }),
        []
    );

    useEffect(() => {
        apiClient.getBooks().then((response) => {
            // console.log(response.data);
            setBooks(response.data);
        });
    }, []);

    return (
        <>
            <MenuAppBar />
            <Container>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Publication year</th>
                        <th>Available copies</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.length > 0 && books.map(book => (
                        <Book
                            key={book.id}
                            id={book.id}
                            isbn={book.isbn}
                            title={book.title}
                            author={book.author}
                            publisher={book.publisher}
                            publicationYear={book.publicationYear}
                            availableCopies={book.availableCopies}
                        />
                    ))}
                    </tbody>
                </table>
                <Box mt={4}>
                    <h3>Add a book</h3>
                    <Formik
                        initialValues={{
                            id: 0,
                            key: 0,
                            isbn: '',
                            title: '',
                            author: '',
                            publisher: '',
                            publicationYear: 0,
                            availableCopies: 0
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
                                            label="ISBN"
                                            name="isbn"
                                            value={formik.values.isbn}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.isbn && !!formik.errors.isbn}
                                            helperText={formik.touched.isbn && formik.errors.isbn}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Title"
                                            name="title"
                                            value={formik.values.title}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.title && !!formik.errors.title}
                                            helperText={formik.touched.title && formik.errors.title}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Author"
                                            name="author"
                                            value={formik.values.author}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.author && !!formik.errors.author}
                                            helperText={formik.touched.author && formik.errors.author}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Publisher"
                                            name="publisher"
                                            value={formik.values.publisher}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.publisher && !!formik.errors.publisher}
                                            helperText={formik.touched.publisher && formik.errors.publisher}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Publication Year"
                                            name="publicationYear"
                                            type="number"
                                            value={formik.values.publicationYear}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.publicationYear && !!formik.errors.publicationYear}
                                            helperText={formik.touched.publicationYear && formik.errors.publicationYear}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Available Copies"
                                            name="availableCopies"
                                            type="number"
                                            value={formik.values.availableCopies}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.availableCopies && !!formik.errors.availableCopies}
                                            helperText={formik.touched.availableCopies && formik.errors.availableCopies}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Box mt={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={!(formik.isValid && formik.dirty)}
                                    >
                                        Add Book
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </>
    );
};

export default BooksList;