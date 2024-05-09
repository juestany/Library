import React from 'react';

interface BookProps {
    id: number;
    isbn: string;
    title: string;
    author: string;
    publisher: string;
    publicationYear: number;
    availableCopies: number;
}

const Book: React.FC<BookProps> = (props) => {
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
