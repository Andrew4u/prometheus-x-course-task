import React from "react";
import { useState, useEffect } from "react";

export const BooksContext = React.createContext([]);

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data.books))
      .catch((error) => console.log(error));
  }, []);
  

  return (
    <BooksContext.Provider value={books}>
      {props.children}
    </BooksContext.Provider>
  );
};
