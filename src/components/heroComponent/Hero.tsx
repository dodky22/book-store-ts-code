import React from "react";

import styles from "../../assets/Hero.module.css";

interface Props {
  children: React.ReactNode;
}

const Hero = ({ children }: Props) => {
  return <section className={styles.hero}>{children}</section>;
};

export default Hero;
