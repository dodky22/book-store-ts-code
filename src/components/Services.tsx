import React from "react";

import styles from "../assets/Services.module.css";

import { FaPhone, FaPlane, FaRegMoneyBillAlt } from "react-icons/fa";

interface Props {}

const Services = (props: Props) => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesItem}>
        <FaPhone className={styles.icon} />
        <div>
          <span className={styles.title}>Customer support</span>
          <p>Call: 0123 456 789</p>
        </div>
      </div>
      <div className={styles.servicesItem}>
        <FaPlane className={styles.icon} />
        <div>
          <span className={styles.title}>Free shipping world wide</span>
          <p>on order over 100</p>
        </div>
      </div>
      <div className={styles.servicesItem}>
        <FaRegMoneyBillAlt className={styles.icon} />
        <div>
          <span className={styles.title}>Money back guarantee</span>
          <p>30 days return</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
