import React from 'react';
import Loan from './Loan';
import MenuAppBar from "./MenuAppBar";

// Constant loans
const loans = [
    {
        id: 3,
        bookTitle: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        userName: 'Emily Johnson',
        loanDate: '2024-05-09',
        loanPeriod: '21 days',
        returnDate: '2024-05-30'
    },
    {
        id: 4,
        bookTitle: 'Refactoring: Improving the Design of Existing Code',
        userName: 'Michael Brown',
        loanDate: '2024-05-12',
        loanPeriod: '10 days',
        returnDate: '2024-05-22'
    },
    {
        id: 5,
        bookTitle: 'The Pragmatic Programmer: Your Journey to Mastery',
        userName: 'Sophia Wilson',
        loanDate: '2024-05-11',
        loanPeriod: '14 days',
        returnDate: '2024-05-25'
    },
    {
        id: 6,
        bookTitle: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        userName: 'David Lee',
        loanDate: '2024-05-07',
        loanPeriod: '7 days',
        returnDate: '2024-05-14'
    },
    {
        id: 7,
        bookTitle: 'Head First Design Patterns: A Brain-Friendly Guide',
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
                    <th>Book Title</th>
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
                        bookTitle={loan.bookTitle}
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
