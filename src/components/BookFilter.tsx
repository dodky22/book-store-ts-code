import React, { useContext, useState } from "react";

import styles from "../assets/BookFilter.module.css";

import { BookContext } from "../context/context";
import BookModel from "../models/BookModel";

// GET ALL UNIQUE VALUES FROM ARRAY --> from stack overflow
const getUnique = (array: {}[], type: string) => {
  return [...new Set(array.map((item: any) => item[type]))];
};

interface Props {
  books: BookModel[];
}

const BookFilter = ({ books }: Props) => {
  const context = useContext(BookContext);
  const {
    genre,
    pages,
    price,
    maxPages,
    minPages,
    maxPrice,
    minPrice,
    isbn,
    editorship,
    language,
    handleChange,
  } = context;

  const [showOptions, setShowOptions] = useState(false);

  let genres = getUnique(books, "genre");
  genres = ["All", ...genres];
  genres = genres.map((genre, id) => {
    return (
      <option value={genre} key={id}>
        {genre}
      </option>
    );
  });

  let editorships = getUnique(books, "editorship");
  editorships = ["All", ...editorships];

  editorships = editorships.map((editorship, id) => {
    return (
      <option value={editorship} key={id}>
        {editorship}
      </option>
    );
  });

  let languages = getUnique(books, "language");
  languages = ["All", ...languages];

  languages = languages.map((language, id) => {
    return (
      <option value={language} key={id}>
        {language}
      </option>
    );
  });

  return (
    <>
      <h3 className={styles.title}>Filter: </h3>
      <div className={styles.container}>
        <form style={{ margin: "1rem 0" }}>
          <div className={styles.formGroup}>
            <label htmlFor="isbn">ISBN: </label>
            <input
              type="text"
              name="isbn"
              id="isbn"
              value={isbn}
              onChange={handleChange}
            />
          </div>
        </form>
        <button
          className={styles.optionsBtn}
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          {showOptions ? "Hide options " : "Show other options"}
        </button>
        <form className={showOptions ? styles.showForm : styles.hideForm}>
          <div className={styles.formGroup}>
            <label htmlFor="genre">Genre: </label>
            <div className={styles.select}>
              <select
                className={styles.select}
                name="genre"
                id="genre"
                value={genre}
                onChange={handleChange}
              >
                {genres}
              </select>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="editorship">Editorship: </label>
            <div className={styles.select}>
              <select
                className={styles.select}
                name="editorship"
                id="editorship"
                value={editorship}
                onChange={handleChange}
              >
                {editorships}
              </select>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="language">Language: </label>
            <div className={styles.select}>
              <select
                name="language"
                id="language"
                value={language}
                onChange={handleChange}
              >
                {languages}
              </select>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="price">Price: {price} €</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="pages">Pages: {pages}</label>
            <input
              type="range"
              name="pages"
              min={minPages}
              max={maxPages}
              id="pages"
              value={pages}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default BookFilter;
