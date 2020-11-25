import Header from '@components/Header';
import React, { Fragment } from 'react';
import styles from '@styles/main.module.css';

const Aboutme = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <div className={styles.box}>
          <h2>About me</h2>
        </div>
      </div>
    </Fragment>
  );
}
export default Aboutme;