import React from 'react';
import styles from './Home.module.css';

function TopBanner() {
  return (
    <>
      <div className="row">
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>Welcome</h1>
        </div>
        <div>
          <img src="./joelpic.jpg" alt="Joel Hilton" />
        </div>
      </div>
    </>
  );
}

export default TopBanner;
