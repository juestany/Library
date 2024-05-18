import React from 'react';
import Loan from './Loan';
import MenuAppBar from "./MenuAppBar";

// Constant loans
const loans = [
    {
        id: 3,
        bookId: 6,
        userName: 'Emily Johnson',
        loanDate: '2024-05-09',
        loanPeriod: '21 days',
        returnDate: '2024-05-30'
    },
    {
        id: 4,
        bookId: 3,
        userName: 'Michael Brown',
        loanDate: '2024-05-12',
        loanPeriod: '10 days',
        returnDate: '2024-05-22'
    },
    {
        id: 5,
        bookId: 1,
        userName: 'Sophia Wilson',
        loanDate: '2024-05-11',
        loanPeriod: '14 days',
        returnDate: '2024-05-25'
    },
    {
        id: 6,
        bookId: 2,
        userName: 'David Lee',
        loanDate: '2024-05-07',
        loanPeriod: '7 days',
        returnDate: '2024-05-14'
    },
    {
        id: 7,
        bookId: 5,
        userName: 'Olivia Taylor',
        loanDate: '2024-05-06',
        loanPeriod: '14 days',
        returnDate: '2024-05-20'
    }
];


const LoansList: React.FC = () => {
    return (
        <>
            <MenuAppBar/>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Book Id</th>
                    <th>User Name</th>
                    <th>Loan Date</th>
                    <th>Loan Period</th>
                    <th>Return Date</th>
                </tr>
                </thead>
                <tbody>
                {loans.map(loan => (
                    <Loan
                        key={loan.id}
                        id={loan.id}
                        bookId={loan.bookId}
                        userName={loan.userName}
                        loanDate={loan.loanDate}
                        loanPeriod={loan.loanPeriod}
                        returnDate={loan.returnDate}
                    />
                ))}
                </tbody>
            </table>
        </>
    );
};

export default LoansList;
