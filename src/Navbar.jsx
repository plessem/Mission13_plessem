import React from 'react';
import styles from './Navbar.module.css';

// creating the navigation bar for the website
function Navbar() {
  return (
    <nav class="navbar navbar-light background-color: #e3f2fd">
      <h3 className={styles.title}>Joel Hilton's Movies</h3>

      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.link} href="/">
            Home
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.link} href="/Podcast">
            Podcast
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.link} href="/Movies">
            Movie List
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
