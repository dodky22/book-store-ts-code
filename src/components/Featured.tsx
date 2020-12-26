import React, { useContext } from "react";

import styles from "../assets/Featured.module.css";
import BookModel from "../models/BookModel";

import { BookContext } from "../context/context";
import { Link } from "react-router-dom";

import Book from "./Book";

interface Props {}

const Featured = (props: Props) => {
  const context = useContext(BookContext);
  const { featuredBooks } = context;

  let books = featuredBooks.map((book: BookModel) => {
    return <Book key={book.isbn} bookDetails={book}></Book>;
  });

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>FEATURED BOOKS</h3>
      <div className={styles.wrapper}>
        <div className={styles.featured}>
          <div className={styles.featuredFlex}>{books}</div>
        </div>
        <Link className={styles.link} to="/book-store-ts/store">
          Store
        </Link>
      </div>
    </section>
  );
};

export default Featured;
