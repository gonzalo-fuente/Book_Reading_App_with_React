import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [
    {title: 'Anna Karenina', author: 'Leo Tolstoy', id: 1},
    {title: 'Madame Bovary', author: 'Gustave Flaubert', id: 2},
    {title: 'War and Peace', author: 'Leo Tolstoy', id: 3},
    {title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', id: 4},
  ]);
  
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;