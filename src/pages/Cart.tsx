import React, { useContext, useState } from "react";

import CheckoutForm from "../components/checkoutForm/CheckoutForm";

import styles from "../assets/Cart.module.css";
import CartBookModel from "../models/CartBookModel";

import { Link } from "react-router-dom";
import { BookContext } from "../context/context";

interface Props {}

const Cart = (props: Props) => {
  const context = useContext(BookContext);
  const {
    cart,
    removeItemsFromCart,
    removeItem,
    incCartItemQuantity,
    decCartItemQuantity,
  } = context;

  const [showCheckout, setShowCheckout] = useState(false);

  const handleShowCheckout = () => {
    setShowCheckout(!showCheckout);
  };

  if (cart === null || cart.length === 0) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h3>Cart</h3>
          <div className={styles.alert}>
            <h3>No items in cart</h3>
            <Link to="/book-store-ts/store" className={styles.link}>
              Back to store
            </Link>
          </div>
        </div>
      </section>
    );
  } else {
    let books = cart.map((item: CartBookModel) => {
      const { isbn, image, name, author, price } = item.book;

      return (
        <tr key={isbn}>
          <td className={styles.image}>
            <img src={image} alt="Not found" className={styles.cartImage} />
          </td>
          <td className={styles.name}>
            <h4>{name}</h4>
          </td>
          <td className={styles.author}>{author}</td>

          <td className={styles.quantityCell}>
            <button
              className={styles.quantityOperator}
              onClick={() => decCartItemQuantity(item)}
            >
              -
            </button>
            <span className={styles.quantity}>{item.quantity}</span>
            <button
              className={styles.quantityOperator}
              onClick={() => incCartItemQuantity(item)}
            >
              +
            </button>
          </td>
          <td>{price} €</td>
          <td>
            <button
              className={styles.deleteBtn}
              onClick={() => removeItem(item)}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
    let prices = cart
      .map((item: CartBookModel) => item.book.price * item.quantity)
      .reduce((a: number, b: number) => a + b, 0);

    return (
      <>
        <section
          className={
            showCheckout ? styles.hide : `${styles.showcart} ${styles.section}`
          }
        >
          <div className={styles.container}>
            <h3>Cart</h3>
            <div className={styles.cart}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.image}>BOOK</th>
                    <th className={styles.name}>NAME</th>
                    <th className={styles.author}>AUTHOR</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                  </tr>
                </thead>
                <tbody>{books}</tbody>
              </table>
              <div className={styles.cartBtnContainer}>
                <button
                  onClick={removeItemsFromCart}
                  className={styles.removeBtn}
                >
                  Remove Items
                </button>
                <div className={styles.totalCheckDiv}>
                  <div className={styles.totalDiv}>
                    <h4>Total: </h4>
                    <span>{prices} €</span>
                  </div>
                  <button
                    className={styles.checkoutBtn}
                    onClick={handleShowCheckout}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={showCheckout ? styles.show : styles.hide}>
          <div className={styles.checkoutContent}>
            <CheckoutForm
              sum={prices}
              handle={handleShowCheckout}
            ></CheckoutForm>
          </div>
        </section>
      </>
    );
  }
};

export default Cart;
