import React, { useContext } from "react";
import styles from "../../assets/Nav.module.css";

import { NavLink } from "react-router-dom";
import { BookContext } from "../../context/context";
interface Props {}

const NormalNav = (props: Props) => {
  const context = useContext(BookContext);
  const { cart } = context;
  return (
    <div className={styles.normalNav}>
      <div className={styles.rightLinks}>
        <NavLink to="/book-store-ts" exact activeClassName={styles.active}>
          <span role="img" aria-label="book emoji">
            📖
          </span>
          Home
        </NavLink>
        <NavLink
          to="/book-store-ts/store"
          exact
          activeClassName={styles.active}
        >
          Store
        </NavLink>
      </div>
      <div className={styles.leftLinks}>
        <NavLink to="/book-store-ts/cart" exact activeClassName={styles.active}>
          Cart
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

export default NormalNav;
