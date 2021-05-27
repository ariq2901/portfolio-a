import { Fragment } from 'react';
import styles from '@styles/main.module.css';

export const Footer = () => {
  const d = new Date();
  return (
    <Fragment>
      <footer>
        <div className={styles.container} style={{ backgroundColor: 'var(--base-font)', height: '100%' }}>
          <div className={styles.footerTitle}>
            <span>Ariq Jusuf</span>
          </div>
          <div className={`${styles.footerSVG} overflow-hidden h-8`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="405.241" height="83.714" viewBox="0 0 500 500">
              <path id="zigzag" className={styles.pathing} d="M751.178,365.438l81.208,60.906,75.408-60.906L989,426.344l75.408-60.906,81.208,60.906" transform="translate(-745.778 -354.034)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18" pathLength="1"/>
            </svg>
          </div>
          <div className="text-center pb-2 text-white font-poppins font-light">Copyright &copy; {d.getFullYear()} Ariq Jusuf</div>
        </div>
      </footer>
    </Fragment>
  );
}