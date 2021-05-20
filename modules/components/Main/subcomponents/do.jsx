import { Fragment, useEffect, useState } from 'react';
import styles from '@styles/main.module.css';

export const Do = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset / 150;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollPattern() {
    const pattern = document.getElementById("pattern");
    pattern.style.transform = `rotate(${scrollPosition}rad)`;
    // pattern.style.transition = "transform "
    console.log('scrollPosition', scrollPosition);
  }

  useEffect(()=> {
    scrollPattern();
  }, [scrollPosition]);

  return (
    <Fragment>
      <div className={styles.container} style={{ paddingTop: "25vh", paddingBottom: "15vh" }}>
        <div className={styles.pattern} id="pattern"></div>
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
              <span className={styles.detailSkill}>I like the interface that look stunning on the website, some of the websites I have created are directly inspired by elegant websites and turn them into something more eye-catching for many to see!</span>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.iconSkill} data-aos="fade-left" data-aos-duration="600" data-aos-delay="600">
              <img className={styles.iconSvg} src="/icons/ecommerce.svg" alt="design icon"/>
            </div>
            <div className={styles.infoSkill} data-aos="fade-right" data-aos-duration="700" data-aos-delay="900">
              <span className={styles.titleSkill}>Ecommerce</span>
              <span className={styles.detailSkill}>After exploring website creation using several modern programming languages. I started building a web marketplace application that worked properly. Sometimes a lot of technology from marketplace features that I have learned and used as a reference to make the application more interesting</span>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.iconSkill} data-aos="fade-left" data-aos-duration="800" data-aos-delay="1200">
              <img className={styles.iconSvg} src="/icons/design.svg" alt="design icon"/>
            </div>
            <div className={styles.infoSkill} data-aos="fade-right" data-aos-duration="900" data-aos-delay="1500">
              <span className={styles.titleSkill}>Designing</span>
              <span className={styles.detailSkill}>Before writing lines of code, I usually make an initial sketch of the view that will be created. Writing code will be much easier for me than when i don't have a clue about what interface to build later</span>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.iconSkill} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1800">
              <img className={styles.iconSvg} src="/icons/backend.svg" alt="backend icon"/>
            </div>
            <div className={styles.infoSkill} data-aos="fade-right" data-aos-duration="1100" data-aos-delay="2300">
              <span className={styles.titleSkill}>Backend Developer</span>
              <span className={styles.detailSkill}>Just like in my brief description above, I like to write lines of logic code that can be used to handle the process of the application that is being used by the user. Usually I am a lot of work in making Restful API</span>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}