import React from "react";

//styles
import styles from "../../assets/Nav.module.css";

import BurgerNav from "./BurgerNav";
import NormalNav from "./NormalNav";

interface Props {}

const Nav = (props: Props) => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <NormalNav />
        <BurgerNav />
      </div>
    </nav>
  );
};

export default Nav;
