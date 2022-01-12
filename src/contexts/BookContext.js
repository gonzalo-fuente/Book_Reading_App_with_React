import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'Anna Karenina', author: 'Leo Tolstoy', id: 1},
    {title: 'Madame Bovary', author: 'Gustave Flaubert', id: 2},
    {title: 'War and Peace', author: 'Leo Tolstoy', id: 3},
    {title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', id: 4},
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;