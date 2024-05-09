import React from 'react';
import Book from './Book';

// constant books
const books = [
    {
        id: 1,
        isbn: '9780132350884',
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        publisher: 'Prentice Hall',
        publicationYear: 2008,
        availableCopies: 10
    },
    {
        id: 2,
        isbn: '9780596007126',
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        publisher: "O'Reilly Media",
        publicationYear: 2008,
        availableCopies: 5
    },
    {
        id: 3,
        isbn: '9780132071482',
        title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
        publisher: 'Addison-Wesley Professional',
        publicationYear: 1994,
        availableCopies: 8
    },
    {
        id: 4,
        isbn: '9780201633610',
        title: 'Refactoring: Improving the Design of Existing Code',
        author: 'Martin Fowler, Kent Beck, John Brant, William Opdyke, Don Roberts',
        publisher: 'Addison-Wesley Professional',
        publicationYear: 1999,
        availableCopies: 6
    },
    {
        id: 6,
        isbn: '9780135957059',
        title: 'The Pragmatic Programmer: Your Journey to Mastery',
        author: 'Andrew Hunt, David Thomas',
        publisher: 'Addison-Wesley Professional',
        publicationYear: 2019,
        availableCopies: 3
    },
    {
        id: 7,
        isbn: '9780137081073',
        title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        author: 'Eric Evans',
        publisher: 'Addison-Wesley Professional',
        publicationYear: 2003,
        availableCopies: 9
    },
    {
        id: 8,
        isbn: '9781449399023',
        title: 'Head First Design Patterns: A Brain-Friendly Guide',
        author: 'Eric Freeman, Elisabeth Robson, Bert Bates, Kathy Sierra',
        publisher: 'O\'Reilly Media',
        publicationYear: 2004,
        availableCopies: 4
    },
    {
        id: 9,
        isbn: '9780134858330',
        title: 'Effective Java',
        author: 'Joshua Bloch',
        publisher: 'Addison-Wesley Professional',
        publicationYear: 2018,
        availableCopies: 8
    },
    {
        id: 10,
        isbn: '9780134685991',
        title: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
        author: 'Robert C. Martin',
        publisher: 'Prentice Hall',
        publicationYear: 2017,
        availableCopies: 5
    }
];

const BooksList: React.FC = () => {
    return (
        <table className={"books-table"}>
            <thead>
            <tr>
                <th>ID</th>
                <th>ISBN</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>Publication year</th>
                <th>Available copies</th>
            </tr>
            </thead>
            <tbody>
            {books.map(book => (
                <Book
                    key={book.id}
                    id={book.id}
                    isbn={book.isbn}
                    title={book.title}
                    author={book.author}
                    publisher={book.publisher}
                    publicationYear={book.publicationYear}
                    availableCopies={book.availableCopies}
                />
            ))}
            </tbody>
        </table>
    );
};

export default BooksList;
