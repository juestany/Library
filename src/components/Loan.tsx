import React from 'react';

interface LoanProps {
    id: number;
    bookId: number;
    userName: string;
    loanDate: string;
    loanPeriod: string;
    returnDate: string;
}

const Loan: React.FC<LoanProps> = (props) => {
    const { id, bookId, userName, loanDate, loanPeriod, returnDate } = props; // Destructure props

    return (
        <tr>
            <td>{id}</td>
            <td>{bookId}</td>
            <td>{userName}</td>
            <td>{loanDate}</td>
            <td>{loanPeriod}</td>
            <td>{returnDate}</td>
        </tr>
    );
};

export default Loan;
