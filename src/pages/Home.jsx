import React from 'react';
// import styles from './Home.module.css';

function Home() {
  return (
    <>
      <div className="row">
        <div className="col align-self-center text-start">
          <h1>
            Welcome! This website has a link to Joel Hilton's podcast and a list
            of his favorite movies!
          </h1>
        </div>
        <div>
          <img src=".././joelpic.jpg" alt="Joel Hilton" />
        </div>
      </div>
    </>
  );
}

export default Home;
