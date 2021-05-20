import React, { Fragment } from 'react';
import styles from '@styles/main.module.css';

export const Project = () => {

  return (
    <Fragment>
      <div className={styles.container} style={{ paddingTop: '10vh', paddingBottom: '5vh' }}>
        <div className={styles.doTitle}>
          <span className={styles.doText}>Recent Project</span>
          <progress className={`${styles.lineProg}`} max="100" value="30"></progress>
        </div>
        <div className="mt-12 w-full grid sm:grid-cols-2 sm:gap-6 grid-cols-1 sm:px-8 px-0 gap-0">
          <div className="w-full h-85 flex-col">
            <div className="transform rounded-lg hover:-translate-y-3 transition bg-red-100 w-full h-4/5 overflow-hidden shadow-md">
              <img src="/project/albeline.jpg" className="w-full"/>
            </div>
            <div className="font-poppins flex-col pt-3">
              <h5 className="font-poppins">Albeline Marketplace</h5>
              <a href="https://github.com/ariq2901/albeline-frontend" className="font-sans text-blue-400">github source</a>
            </div>
          </div>
          <div className="w-full h-85 flex-col">
            <div className="transform rounded-lg hover:-translate-y-3 transition bg-red-100 w-full h-4/5 overflow-hidden shadow-md">
              <img src="/project/loan.jpg" className="w-full"/>
            </div>
            <div className="font-poppins flex-col pt-3">
              <h5 className="font-poppins">Loan App (Restful API)</h5>
              <a href="https://github.com/ariq2901/LOAN-backend" className="font-sans text-blue-400">github source</a>
            </div>
          </div>
          <div className="w-full h-85 flex-col">
            <div className="transform rounded-lg hover:-translate-y-3 transition bg-red-100 w-full h-4/5 overflow-hidden shadow-md">
              <img src="/project/skytours.jpg" className="w-full"/>
            </div>
            <div className="font-poppins flex-col pt-3">
              <h5 className="font-poppins">Skytours Travel Agency</h5>
              <a href="https://github.com/ariq2901/oxcode" className="font-sans text-blue-400">github source</a>
            </div>
          </div>
          <div className="w-full h-85 flex-col">
            <div className="transform rounded-lg hover:-translate-y-3 transition bg-red-100 w-full h-4/5 overflow-hidden shadow-md">
              <img src="/project/ptmas.jpg" className="w-full"/>
            </div>
            <div className="font-poppins flex-col pt-3">
              <h5 className="font-poppins">PT. Mitra Agro Servindo Website</h5>
            </div>
          </div>
        </div>
        {/* <div className={styles.projectWrapper}>
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
        </div> */}
      </div>
    </Fragment>
  );
};
