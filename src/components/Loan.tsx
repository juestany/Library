import React from 'react';

interface LoanProps {
    id: number;
    bookTitle: string;
    userName: string;
    loanDate: string;
    loanPeriod: string;
    returnDate: string;
}

const Loan: React.FC<LoanProps> = (props) => {
    const { id, bookTitle, userName, loanDate, loanPeriod, returnDate } = props; // Destructure props

    return (
        <tr>
            <td>{id}</td>
            <td>{bookTitle}</td>
            <td>{userName}</td>
            <td>{loanDate}</td>
            <td>{loanPeriod}</td>
            <td>{returnDate}</td>
        </tr>
    );
};

export default Loan;
