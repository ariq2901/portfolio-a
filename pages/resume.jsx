import Header from '@components/Header';
import React, { Fragment } from 'react';
import styles from '@styles/main.module.css';
import Timeline from '@components/Timeline';

const Resume = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <Timeline />
      </div>
    </Fragment>
  );
}
export default Resume;