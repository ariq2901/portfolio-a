import { Fragment } from 'react';
import styles from '@styles/main.module.css';

export const Do = () => {

  return (
    <Fragment>
      <div className={styles.container} style={{ paddingTop: "25vh" }}>
        <div className={styles.doTitle}>
          <span className={styles.doText}>What I Do</span>
          <progress className={styles.lineProg} max="100" value="30"></progress>
        </div>
        <div className={styles.skills}>

          <div className={styles.skill}>
            <div className={styles.iconSkill} data-aos="fade-left" data-aos-duration="500">
              <img className={styles.iconSvg} src="/icons/frontend.svg" alt="design icon"/>
            </div>
            <div className={styles.infoSkill} data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
              <span className={styles.titleSkill}>Frontend Developer</span>
              <span className={styles.detailSkill}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iure placeat sapiente delectus beatae commodi consequuntur omnis, ipsa hic rem doloremque. In alias fuga temporibus molestiae, unde illo enim fugit!</span>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.iconSkill} data-aos="fade-left" data-aos-duration="600" data-aos-delay="600">
              <img className={styles.iconSvg} src="/icons/ecommerce.svg" alt="design icon"/>
            </div>
            <div className={styles.infoSkill} data-aos="fade-right" data-aos-duration="700" data-aos-delay="900">
              <span className={styles.titleSkill}>Ecommerce</span>
              <span className={styles.detailSkill}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iure placeat sapiente delectus beatae commodi consequuntur omnis, ipsa hic rem doloremque. In alias fuga temporibus molestiae, unde illo enim fugit!</span>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.iconSkill} data-aos="fade-left" data-aos-duration="800" data-aos-delay="1200">
              <img className={styles.iconSvg} src="/icons/design.svg" alt="design icon"/>
            </div>
            <div className={styles.infoSkill} data-aos="fade-right" data-aos-duration="900" data-aos-delay="1500">
              <span className={styles.titleSkill}>Designing</span>
              <span className={styles.detailSkill}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iure placeat sapiente delectus beatae commodi consequuntur omnis, ipsa hic rem doloremque. In alias fuga temporibus molestiae, unde illo enim fugit!</span>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.iconSkill} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1800">
              <img className={styles.iconSvg} src="/icons/backend.svg" alt="backend icon"/>
            </div>
            <div className={styles.infoSkill} data-aos="fade-right" data-aos-duration="1100" data-aos-delay="2300">
              <span className={styles.titleSkill}>Backend Developer</span>
              <span className={styles.detailSkill}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iure placeat sapiente delectus beatae commodi consequuntur omnis, ipsa hic rem doloremque. In alias fuga temporibus molestiae, unde illo enim fugit!</span>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}