import React, { useContext } from "react";

import BookFilter from "./BookFilter";
import BookList from "./BookList";
import Loading from "./Loading";

import { BookContext } from "../context/context";

interface Props {}

const BooksContainer = (props: Props) => {
  const context = useContext(BookContext);
  const { loading, sortedBooks, books } = context;
  // console.log(loading);
  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <section
        style={{
          width: "80%",
          margin: "0 auto",
          padding: "2rem",
          backgroundColor: "#fff",
        }}
      >
        <BookFilter books={books}></BookFilter>
        <BookList books={sortedBooks}></BookList>
      </section>
    );
  }
};

export default BooksContainer;
