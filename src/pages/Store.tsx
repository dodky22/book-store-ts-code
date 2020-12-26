import React from "react";

import styles from "../assets/Store.module.css";

import Hero from "../components/heroComponent/Hero";
import BooksContainer from "../components/BooksContainer";
import Banner from "../components/heroComponent/Banner";

import { Link } from "react-router-dom";

interface Props {}

const Store = (props: Props) => {
  return (
    <>
      <Hero>
        <Banner title="Store">
          <Link className={styles.link} to="/book-store-ts">
            Home
          </Link>
        </Banner>
      </Hero>
      <BooksContainer></BooksContainer>
    </>
  );
};

export default Store;
