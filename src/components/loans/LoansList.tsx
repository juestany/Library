import React, { useEffect, useState, useCallback, useMemo } from "react";
import { TextField, Button, Grid, Box, Container } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import MenuAppBar from "../MenuAppBar";
import Loan from "./Loan";
import { useApi } from "../../api/ApiProvider";

interface Loan {
    id: number;
    bookId: number;
    userId: string;
    loanDate: string;
    loanPeriod: string;
    returnDate: string;
}

function LoansList() {
    const apiClient = useApi();
    const [loans, setLoans] = useState<Loan[]>([]);

    const onSubmit = useCallback(
        (values: Loan, formik: any) => {
            apiClient.addLoan(values).then((response) => {
                // console.log(response.data);
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
            console.log(response.data);
            setLoans(response.data);
        });
    }, [apiClient]);

    return (
        <>
            <MenuAppBar />
            <Container>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book ID</th>
                        <th>User ID</th>
                        <th>Loan Date</th>
                        <th>Loan Period</th>
                        <th>Return Date</th>
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
                    <h3>Add a Loan</h3>
                    <Formik
                        initialValues={{
                            id: 0,
                            bookId: 0,
                            userId: '',
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
                                            label="Book ID"
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
                                            label="User ID"
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
                                            label="Loan Date"
                                            name="loanDate"
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
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
                                            label="Loan Period"
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
                                            label="Return Date"
                                            name="returnDate"
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
                                            value={formik.values.returnDate}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.returnDate && !!formik.errors.returnDate}
                                            helperText={formik.touched.returnDate && formik.errors.returnDate}
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
                                        Add Loan
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
