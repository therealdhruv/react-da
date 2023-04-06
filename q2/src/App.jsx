import './App.css'

import { useState } from 'react';

const BookSearch = () => {
  const [books, setBooks] = useState([
    {
      name: 'Book 1',
      author: 'Author 1',
      publisher: 'Publisher 1',
      cost: 10,
      year: 2020
    },
    {
      name: 'Book 2',
      author: 'Author 2',
      publisher: 'Publisher 2',
      cost: 20,
      year: 2021
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newBook, setNewBook] = useState({
    name: '',
    author: '',
    publisher: '',
    cost: '',
    year: ''
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNewBookChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleAddBook = () => {
    setBooks([...books, newBook]);
    setNewBook({
      name: '',
      author: '',
      publisher: '',
      cost: '',
      year: ''
    });
  };

  return (
    <div>
      <h2>Search for a book</h2>
      <input
        type="text"
        placeholder="Search by book name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {books
          .filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((book) => (
            <li key={book.name} className="book-item">
              <div>
                <span>{book.name} by {book.author} ({book.year})</span>
              </div>
            </li>
          ))}
      </ul>
      <h2>Add a new book</h2>
      <div className="book-form">
        <input
          type="text"
          placeholder="Book name"
          name="name"
          value={newBook.name}
          onChange={handleNewBookChange}
        />
        <input
          type="text"
          placeholder="Author name"
          name="author"
          value={newBook.author}
          onChange={handleNewBookChange}
        />
        <input
          type="text"
          placeholder="Publisher name"
          name="publisher"
          value={newBook.publisher}
          onChange={handleNewBookChange}
        />
        <input
          type="number"
          placeholder="Cost"
          name="cost"
          value={newBook.cost}
          onChange={handleNewBookChange}
        />
        <input
          type="number"
          placeholder="Year of publication"
          name="year"
          value={newBook.year}
          onChange={handleNewBookChange}
        />
      </div>
      <br />
      <br />
      <button onClick={handleAddBook}>Add book</button>
    </div>
  );
};

export default BookSearch;

