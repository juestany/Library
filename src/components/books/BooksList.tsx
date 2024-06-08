import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Book from './Book';
import * as yup from 'yup';
import MenuAppBar from "../MenuAppBar";
import { TextField, Button, Grid, Box, Container } from '@mui/material'
import {useApi} from "../../api/ApiProvider";
import {Formik} from "formik";
import {useLanguage} from "../../api/LanguageProvider";

function BooksList() {

    const apiClient = useApi();
    const [books, setBooks] = useState<Book[]>([])
    // @ts-ignore
    const { language } = useLanguage();

    const onSubmit = useCallback(
        (values: Book, formik: any) => {
            apiClient.addBook(values).then((response) => {
                console.log(response);
                if (response.success) {
                    const newBooks = [...books, response.data];
                    setBooks(newBooks);
                    formik.resetForm();
                } else {
                    console.error('Error adding book');
                }
            });
        },
        [apiClient, books]
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
            console.log(response.data);
            if (response.data != null) {
                setBooks(response.data);
            }
        });
    }, [apiClient]);

    return (
        <>
            <MenuAppBar />
            <h1>{language === 'English' ? 'Books' : 'Książki'}</h1>
            <Container style={{marginTop: '2rem'}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>ISBN</th>
                        <th>{language === 'English' ? 'Title' : 'Tytuł'}</th>
                        <th>{language === 'English' ? 'Author' : 'Autor'}</th>
                        <th>{language === 'English' ? 'Publisher' : 'Wydawnictwo'}</th>
                        <th>{language === 'English' ? 'Publication year' : 'Rok publikacji'}</th>
                        <th>{language === 'English' ? 'Available copies' : 'Dostępne kopie'}</th>
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
                    <h3>{language === 'English' ? 'Add a book' : 'Dodaj książkę'}</h3>
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
                                            label={language === 'English' ? 'Title' : 'Tytuł'}
                                            name='title'
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
                                            label={language === 'English' ? 'Author' : 'Autor'}
                                            name='author'
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
                                            label={language === 'English' ? 'Publisher' : 'Wydawnictwo'}
                                            name='publisher'
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
                                            label={language === 'English' ? 'Publication year' : 'Rok publikacji'}
                                            name='publicationYear'
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
                                            label={language === 'English' ? 'Available copies' : 'Dostępne kopie'}
                                            name='availableCopies'
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
                                <Box mt={2} style={{marginBottom: '2rem'}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={!(formik.isValid && formik.dirty)}
                                    >
                                        {language === 'English' ? 'Add book' : 'Dodaj książkę'}
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