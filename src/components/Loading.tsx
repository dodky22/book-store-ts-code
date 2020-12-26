import React from "react";

import styles from "../assets/Loading.module.css";

import loadGif from "../assets/images/loading-gear.gif";

interface Props {}

const Loading = (props: Props) => {
  return (
    <div className={styles.loading}>
      <h3>LOADING OUR BOOKS</h3>
      <img src={loadGif} alt="" />
    </div>
  );
};

export default Loading;
