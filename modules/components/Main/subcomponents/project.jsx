import React, { Fragment } from 'react';
import styles from '@styles/main.module.css';

export const Project = () => {
  return (
    <Fragment>
      <div className={styles.container} style={{ paddingTop: '10vh' }}>
        <div className={styles.doTitle}>
          <span className={styles.doText}>Recent Project</span>
          <progress className={`${styles.lineProg}`} max="100" value="30"></progress>
        </div>
        <div className={styles.projectWrapper}>
          <div className={styles.item}>
            <img className={`${styles.imageProject} ${styles.masImg}`} src="/project/mas.jpg" alt="mas"/>
            <div className={styles.overlayProject}>
              <div className={styles.titleProject}><span>Mitra Agro Servindo</span></div>
              <div className={styles.infoProject}><span>Company Profile Website</span></div>
            </div>
          </div>
          <div className={styles.item}>
            <img className={styles.imageProject} src="/project/skytours.jpg" alt="skytours"/>
            <div className={styles.overlayProject}>
              <div className={styles.titleProject}><span>Skytours</span></div>
              <div className={styles.infoProject}><span>Travel Agency Website</span></div>
            </div>
          </div>
          <div className={styles.item}>
            <img className={styles.imageProject} src="/project/loan.png" alt="loan"/>
            <div className={styles.overlayProject}>
              <div className={styles.titleProject}><span>Loan</span></div>
              <div className={styles.infoProject}><span>Laptop Borrowing Request mobile App (Backend Restful API)</span></div>
            </div>
          </div>
          <div className={styles.item}>
            <img className={styles.imageProject} src="/project/skytours.jpg" alt="skytours"/>
            <div className={styles.overlayProject}>
              <div className={styles.titleProject}><span>Skytours</span></div>
              <div className={styles.infoProject}><span>Travel Agency Website</span></div>
            </div>
          </div>
          <div className={styles.item}>
            <img className={styles.imageProject} src="/project/staple.png" alt="staple"/>
            <div className={styles.overlayProject}>
              <div className={styles.titleProject}><span>Staple Ecommerce</span></div>
              <div className={styles.infoProject}><span>Staple Ecommerce Web App</span></div>
            </div>
          </div>
          <div className={styles.item}>
            <img className={styles.imageProject} src="/project/skytours.jpg" alt="skytours"/>
            <div className={styles.overlayProject}>
              <div className={styles.titleProject}><span>Skytours</span></div>
              <div className={styles.infoProject}><span>Travel Agency Website</span></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
