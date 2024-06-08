import React, { useEffect, useState, useCallback, useMemo } from "react";
import { TextField, Button, Grid, Box, Container } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import MenuAppBar from "../MenuAppBar";
import Loan from "./Loan";
import { useApi } from "../../api/ApiProvider";
import {useLanguage} from "../../api/LanguageProvider";

function LoansList() {
    const apiClient = useApi();
    const [loans, setLoans] = useState<Loan[]>([]);
    // @ts-ignore
    const { language } = useLanguage();

    const onSubmit = useCallback(
        (values: Loan, formik: any) => {
            apiClient.addLoan(values).then((response) => {
                console.log(response.data);
                if (response.success) {
                    setLoans([...loans, response.data]);
                    formik.resetForm();
                } else {
                    console.error('Error adding loan');
                }
            });
        },
        [apiClient, loans]
    );

    const validationSchema = useMemo(
        () =>
            yup.object().shape({
                bookId: yup.number().required('Book ID is required'),
                userId: yup.string().required('User ID is required'),
                loanDate: yup.date().required('Loan Date is required').typeError('Invalid date format'),
                loanPeriod: yup.string().required('Loan Period is required'),
                returnDate: yup.date().required('Return Date is required').typeError('Invalid date format'),
            }),
        []
    );

    useEffect(() => {
        apiClient.getLoans().then((response) => {
            // console.log(response.data);
            setLoans(response.data);
        });
    }, [apiClient]);

    return (
        <>
            <MenuAppBar/>
            <h1>{language === 'English' ? 'Loans' : 'Wypożyczenia'}</h1>
            <Container style={{marginTop: '2rem'}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>{language === 'English' ? 'Book ID' : 'ID książki'}</th>
                        <th>{language === 'English' ? 'User ID' : 'ID czytelnika'}</th>
                        <th>{language === 'English' ? 'Loan date' : 'Data wypożyczenia'}</th>
                        <th>{language === 'English' ? 'Loan period' : 'Okres wypożyczenia'}</th>
                        <th>{language === 'English' ? 'Return date' : 'Data zwrotu'}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loans.length > 0 && loans.map(loan => (
                        <Loan
                            key={loan.id}
                            id={loan.id}
                            bookId={loan.bookId}
                            userId={loan.userId}
                            loanDate={loan.loanDate}
                            loanPeriod={loan.loanPeriod}
                            returnDate={loan.returnDate}
                        />
                    ))}
                    </tbody>
                </table>
                <Box mt={4}>
                    <h3>{language === 'English' ? 'Add a loan' : 'Dodaj wypożyczenie'}</h3>
                    <Formik
                        initialValues={{
                            id: 0,
                            bookId: 0,
                            userId: 0,
                            loanDate: '',
                            loanPeriod: '',
                            returnDate: ''
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
                                            label={language === 'English' ? 'Book ID' : 'ID książki'}
                                            name="bookId"
                                            type="number"
                                            value={formik.values.bookId}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.bookId && !!formik.errors.bookId}
                                            helperText={formik.touched.bookId && formik.errors.bookId}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label={language === 'English' ? 'User ID' : 'ID czytelnika'}
                                            name="userId"
                                            value={formik.values.userId}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.userId && !!formik.errors.userId}
                                            helperText={formik.touched.userId && formik.errors.userId}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label={language === 'English' ? 'Loan date' : 'Data wypożyczenia'}
                                            name="loanDate"
                                            type="date"
                                            InputLabelProps={{shrink: true}}
                                            value={formik.values.loanDate}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.loanDate && !!formik.errors.loanDate}
                                            helperText={formik.touched.loanDate && formik.errors.loanDate}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label={language === 'English' ? 'Loan period' : 'Okres wypożyczenia'}
                                            name="loanPeriod"
                                            value={formik.values.loanPeriod}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.loanPeriod && !!formik.errors.loanPeriod}
                                            helperText={formik.touched.loanPeriod && formik.errors.loanPeriod}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            name={language === 'English' ? 'Return date' : 'Data zwrotu'}
                                            type="date"
                                            InputLabelProps={{shrink: true}}
                                            value={formik.values.returnDate}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.returnDate && !!formik.errors.returnDate}
                                            helperText={formik.touched.returnDate && formik.errors.returnDate}
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
                                        {language === 'English' ? 'Add loan' : 'Dodaj wypożyczenie'}
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </>
    );
}

export default LoansList;
