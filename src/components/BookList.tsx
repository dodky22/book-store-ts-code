import React from "react";

import styles from "../assets/BookList.module.css";

import Book from "../components/Book";
import BookModel from "../models/BookModel";

interface Props {
  books: BookModel[];
}

const BookList = ({ books }: Props) => {
  let listOfBooks = books.map((book: BookModel, isbn: number) => {
    return <Book key={isbn} bookDetails={book} />;
  });

  if (books.length === 0) {
    return (
      <div className={styles.alert}>
        <h3>Unfortunately no books match your search criteria</h3>
      </div>
    );
  } else {
    return (
      <div className={styles.bookList}>
        <h3 className={styles.title}>Books: </h3>
        <div className={styles.container}>{listOfBooks}</div>
      </div>
    );
  }
};

export default BookList;
