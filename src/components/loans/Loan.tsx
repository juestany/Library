import React from 'react';
import {date} from "yup";

interface LoanProps {
    id: number;
    bookId: number;
    userId: string;
    loanDate: string;
    loanPeriod: string;
    returnDate: string;
}

const Loan: React.FC<LoanProps> = (props) => {
    const { id, bookId, userId, loanDate, loanPeriod, returnDate } = props; // Destructure props

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
