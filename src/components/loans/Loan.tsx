import React from 'react';

interface Loan {
    id: number;
    bookId: number;
    userId: number;
    loanDate: string;
    loanPeriod: string;
    returnDate: string;
}

const Loan: React.FC<Loan> = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.bookId}</td>
            <td>{props.userId}</td>
            <td>{props.loanDate}</td>
            <td>{props.loanPeriod}</td>
            <td>{props.returnDate}</td>
        </tr>
    );
};

export default Loan;
