import { Fragment } from 'react';
import styles from '@styles/main.module.css';

export const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className={styles.container} style={{ backgroundColor: 'var(--base-font)', height: '100%' }}>
          <div className={styles.footerTitle}>
            <span>Ariq Jusuf</span>
          </div>
          <div className={styles.footerSVG}>
            <svg xmlns="http://www.w3.org/2000/svg" width="405.241" height="83.714" viewBox="0 0 500 500">
              <path id="zigzag" className={styles.pathing} d="M751.178,365.438l81.208,60.906,75.408-60.906L989,426.344l75.408-60.906,81.208,60.906" transform="translate(-745.778 -354.034)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18" pathLength="1"/>
            </svg>
          </div>
          <div className={styles.iconFooter}>
            <div className={styles.iFoot}>
              <div className={styles.iconKotak}>
                <i className={`${styles.iconFoot} fas fa-bars`}></i>
              </div>
              <span className={styles.nameFoot}>Links</span>
            </div>
            <div className={styles.iFoot}>
              <i className={`${styles.iconFoot} fas fa-globe-asia`}></i>
              <span className={styles.nameFoot}>Social</span>
            </div>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.linkFooter}>
              <div className={styles.linkRound}>
                About me
              </div>
              <div className={styles.linkRound}>
                Resume
              </div>
              <div className={styles.linkRound}>
                Portfolio
              </div>
              <div className={styles.linkRound}>
                Blog
              </div>
              <div className={styles.linkRound}>
                Contact
              </div>
            </div>
            <div className={styles.socialFooter}>p</div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}