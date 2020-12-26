import React, { useState, useContext } from "react";
import styles from "../../assets/Nav.module.css";

import { FaAlignJustify, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BookContext } from "../../context/context";

interface Props {}

const BurgerNav = (props: Props) => {
  const [burger, setBurger] = useState(false);

  const context = useContext(BookContext);
  const { cart } = context;

  const toggleBurger = () => {
    setBurger(!burger);
  };
  return (
    <div className={styles.showBurger}>
      <div>
        <button
          className={styles.burgerButton}
          type="button"
          onClick={toggleBurger}
        >
          <FaAlignJustify />
        </button>
        <ul className={burger ? styles.showLinks : styles.hideLinks}>
          <li>
            <NavLink to="/book-store-ts">
              {" "}
              <span role="img" aria-label="book emoji">
                📖
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/book-store-ts/store">Store</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <NavLink to="/book-store-ts/cart" exact activeClassName={styles.active}>
          <FaShoppingCart className={styles.burgerCart} />
        </NavLink>
        {cart !== null ? (
          <span className={styles.pill}>{cart.length}</span>
        ) : (
          <span className={styles.pill}>0</span>
        )}
      </div>
    </div>
  );
};

export default BurgerNav;
