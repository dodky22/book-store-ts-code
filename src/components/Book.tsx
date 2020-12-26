import React, { useContext } from "react";

import BookModel from "../models/BookModel";

import styles from "../assets/Book.module.css";

import { BookContext } from "../context/context";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  bookDetails: BookModel;
}

const Book = ({ bookDetails }: Props) => {
  const { image, price, name, slug } = bookDetails;
  const context = useContext(BookContext);
  const { addCart } = context;

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className={styles.book}>
      <img src={image} alt="Not found" />
      <h5>{name !== undefined ? truncate(name, 35) : ""}</h5>
      <Link to={`/book-store-ts/store/${slug}`} className={styles.info}>
        Info
      </Link>
      <span className={styles.price}>{price} € </span>
      <button className={styles.cart} onClick={() => addCart(bookDetails)}>
        <FaShoppingCart className={styles.icon} />
      </button>
    </div>
  );
};

export default Book;
