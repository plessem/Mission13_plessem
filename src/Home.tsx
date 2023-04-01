import React from 'react';
import styles from './Home.module.css';

function TopBanner() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="thispicture" />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>Welcome</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
