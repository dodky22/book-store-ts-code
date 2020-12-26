import React from "react";

import styles from "../assets/Footer.module.css";

import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram } from "react-icons/fa";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftFooter}>
          <div className={styles.leftFooterItems}>
            <h3>Contact</h3>
            <span>Adress</span>
            <span>City</span>
            <span>Postal code</span>
            <span>Phone</span>
          </div>
          <div>
            <h3>About</h3>
            <span>About us</span>
            <span>References</span>
            <span>Blog</span>
          </div>
          <div>
            <h3>Navigation</h3>
            <Link to="/book-store-ts">
              <span role="img" aria-label="book emoji">
                {" "}
                📖
              </span>{" "}
              Home
            </Link>
            <Link to="/book-store-ts/store">Store</Link>
            <Link to="/book-store-ts/cart">Cart</Link>
          </div>
        </div>
        <div className={styles.rightFooter}>
          <h3>Socials</h3>
          <a
            target="_blank"
            onClick={() => {
              window.open("https://www.facebook.com");
            }}
          >
            <FaFacebook className={styles.footerIcon} />
          </a>
          <a
            target="_blank"
            onClick={() => {
              window.open("https://www.instagram.com");
            }}
          >
            <FaInstagram className={styles.footerIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
