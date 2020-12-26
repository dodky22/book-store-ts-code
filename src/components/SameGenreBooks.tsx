import React, { useContext } from "react";
import BookModel from "../models/BookModel";

import styles from "../assets/SameGenreBooks.module.css";

import { BookContext } from "../context/context";
import { Link } from "react-router-dom";

import Book from "./Book";

interface Props {
  thisGenre: string;
  thisBook: BookModel;
}

const SameGenreBooks = ({ thisGenre, thisBook }: Props) => {
  const context = useContext(BookContext);
  const { books } = context;

  let sameGenreBooks: BookModel[] = books.filter(
    (book: BookModel) => book.genre === thisGenre
  );

  let sameBook = sameGenreBooks.find(
    (book: BookModel) => book.isbn === thisBook.isbn
  );
  if (sameBook !== undefined) {
    let index = sameGenreBooks.indexOf(sameBook);
    sameGenreBooks.splice(index, 1);
  }

  let booksGenre = sameGenreBooks.map((book: BookModel, isbn: number) => {
    return <Book key={isbn} bookDetails={book}></Book>;
  });

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>BOOKS FROM SAME GENRE</h3>
      <div className={styles.wrapper}>
        <div className={styles.sameGenre}>
          <div className={styles.sameGenreFlex}>{booksGenre}</div>
        </div>
        <Link className={styles.link} to="/book-store-ts/store">
          Store
        </Link>
      </div>
    </section>
  );
};

export default SameGenreBooks;
