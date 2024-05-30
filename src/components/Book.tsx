import React from 'react';
import {number, string} from "yup";

interface Book {
    id: number,
    isbn: string,
    title: string,
    author: string,
    publisher: string,
    publicationYear: number,
    availableCopies: number,
    key: number
}

const Book: React.FC<Book> = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.isbn}</td>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.publisher}</td>
            <td>{props.publicationYear}</td>
            <td>{props.availableCopies}</td>
        </tr>
    );
};

export default Book;
