import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../images/logo.svg"
import calculation from "../images/calculation.svg"
import measering from "../images/measering.svg"
function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about-us">About us</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <div className={styles.actions}>
        <button className={styles.request}>
          <img src={measering} alt="request" className={styles.icon} />
          Make Request
        </button>
        <button className={styles.calculation}>
          <img src={calculation} alt="calculation" className={styles.icon} />
          Calculation
        </button>
      </div>
    </nav>
  );
}

export default Nav;
