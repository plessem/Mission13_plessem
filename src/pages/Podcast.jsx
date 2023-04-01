import React from 'react';
import styles from '.././Home.module.css';

function Podcast() {
  return (
    <>
      <div className={styles.align}>
        <div className={styles.header}>
          <h1>Click the link below to visit Joel Hilton's podcast!</h1>
          <br></br>
          <a className={styles.link} href="https://baconsale.com/">
            Baconsale
          </a>
        </div>
      </div>
    </>
  );
}

export default Podcast;
