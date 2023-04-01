import React from 'react';
import styles from '.././Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.align}>
        <div className={styles.welcome}>
          <br></br>
          <br></br>
          <h1 className={styles.h1}>Welcome!</h1>
          <h3>
            This website has a link to Joel Hilton's podcast and a list of his
            favorite movies!
          </h3>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <div>
          <img src=".././joelpic.jpg" alt="Joel Hilton" />
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Home;
