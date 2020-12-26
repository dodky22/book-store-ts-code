import React from "react";
import styles from "../assets/SuccessOrder.module.css";

import { Link } from "react-router-dom";

interface Props {}

const SuccessOrder = (props: Props) => {
  return (
    <section className={styles.successSection}>
      <h1>THANK FOR YOUR ORDER</h1>
      <h2>It will be shipped to you as soon as possible</h2>
      <div>
        <Link to="/book-store-ts/" className={styles.successLink}>
          Homepage
        </Link>
        <Link to="/book-store-ts/store" className={styles.successLink}>
          Store
        </Link>
      </div>
    </section>
  );
};

export default SuccessOrder;
