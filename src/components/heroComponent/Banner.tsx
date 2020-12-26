import React from "react";

import styles from "../../assets/Banner.module.css";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Banner = ({ title, children }: Props) => {
  return (
    <div className={styles.banner}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Banner;
