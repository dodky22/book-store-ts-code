import React, { useContext } from "react";

import styles from "../assets/SingleProduct.module.css";

import Loading from "../components/Loading";
import Featured from "../components/Featured";
import SameGenreBooks from "../components/SameGenreBooks";

import { BookContext } from "../context/context";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

interface Props {
  match: { params: { slug: string } };
}

const SingleProduct = (props: Props) => {
  const context = useContext(BookContext);
  const { loading, getBook, addCart } = context;
  let slug = props.match.params.slug;
  const book = getBook(slug);

  if (loading) {
    return <Loading />;
  } else if (!book) {
    return (
      <div>
        <div>
          <h3>Sorry, we couldn`t find this book</h3>
          <Link to="/book-store-ts/store">Back to store</Link>
        </div>
      </div>
    );
  } else {
    const {
      author,
      description,
      editorship,
      genre,
      image,
      isbn,
      language,
      name,
      pages,
      price,
      published,
      size,
      weight,
    } = book;

    // console.log(book);

    return (
      <>
        <div className={styles.container}>
          <div className={styles.flexRow}>
            <div className={styles.imgPrice}>
              <img src={image} alt="Not found" className={styles.singleImage} />
              <span className={styles.price}>{price} € </span>
            </div>
            <div className={styles.flexCol}>
              <h3 className={styles.title}>{name}</h3>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th>Author: </th>
                    <td>{author}</td>
                  </tr>
                  <tr>
                    <th>Genre: </th>
                    <td>{genre}</td>
                  </tr>
                  <tr>
                    <th>ISBN: </th>
                    <td>{isbn}</td>
                  </tr>
                  <tr>
                    <th>Language: </th>
                    <td>{language}</td>
                  </tr>
                  <tr>
                    <th>Pages: </th>
                    <td>{pages}</td>
                  </tr>
                </tbody>
              </table>

              <button
                className={styles.cartBtn}
                onClick={() => {
                  addCart(book);
                }}
              >
                Add to cart
                <FaShoppingCart className={styles.icon} />
              </button>
            </div>
          </div>

          <div className={styles.info}>
            <h3>Desription: </h3>
            <p>{description}</p>
          </div>
          <div className={styles.otherInfo}>
            <h3>Other: </h3>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th>Editorship: </th>
                  <td>{editorship}</td>
                </tr>
                <tr>
                  <th>Published: </th>
                  <td>{published}</td>
                </tr>
                <tr>
                  <th>Size: </th>
                  <td>{size} mm</td>
                </tr>
                <tr>
                  <th>Weight: </th>
                  <td>{weight} g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <SameGenreBooks thisGenre={genre} thisBook={book}></SameGenreBooks>
        <Featured></Featured>
      </>
    );
  }
};

export default SingleProduct;
