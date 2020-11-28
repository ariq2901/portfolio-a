import { Fragment, useEffect, useState } from "react";
import styles from '@styles/main.module.css';

import { motion } from "framer-motion";

export const Skill = () => {

  const [skill, setSkill] = useState([]);
  const [nativeLogo, setNativeLogo] = useState(true);
  const [frameworkLogo, setFrameworkLogo] = useState(false);
  const [designToolLogo, setDesignToolLogo] = useState(false);

  useEffect(() => {
    if(skill.length < 1) {
      setSkill(native);
    }
  }, skill);

  const native = [
    {
      "id" : 1,
      "name" : "Javascript",
      "image" : "/icons/js.png",
      "skill" : 95
    },
    {
      "id" : 2,
      "name" : "CSS",
      "image" : "/icons/css.png",
      "skill" : 96
    },
    {
      "id" : 3,
      "name" : "Dart",
      "image" : "/icons/dart.png",
      "skill" : 85
    },
    {
      "id" : 4,
      "name" : "HTML",
      "image" : "/icons/html.png",
      "skill" : 90
    },
    {
      "id" : 5,
      "name" : "PHP",
      "image" : "/icons/php.png",
      "skill" : 94
    },
    {
      "id" : 6,
      "name" : "Java",
      "image" : "/icons/java.webp",
      "skill" : 80
    },
  ];

  const framework = [
    {
      "id" : 7,
      "name" : "Bootstrap",
      "image" : "/icons/bootstrap.png",
      "skill" : 98
    },
    {
      "id" : 8,
      "name" : "Laravel",
      "image" : "/icons/laravel.png",
      "skill" : 97
    },
    {
      "id" : 9,
      "name" : "React",
      "image" : "/icons/react.png",
      "skill" : 95
    },
    {
      "id" : 10,
      "name" : "Codeigniter",
      "image" : "/icons/codeigniter.png",
      "skill" : 90
    },
  ];

  const designTool = [
    {
      "id" : 11,
      "name" : "Adobe XD",
      "image" : "/icons/xd.png",
      "skill" : 90
    },
    {
      "id" : 12,
      "name" : "Photoshop",
      "image" : "/icons/photoshop.png",
      "skill" : 92
    }
  ];

  function refresh()
  {
    setTimeout(() => {
      var logo = document.getElementsByClassName(styles.logoWrapper);
      console.log('logo', logo);
      for(let i=0; i < logo.length; i++) {
        logo[i].classList.remove(styles.visibleLogoWrapper);
        setTimeout(() => {
          logo[i].classList.add(styles.visibleLogoWrapper);
        }, 300);
      }
    }, 1);
  };
    
  return (
    <Fragment>
      <div className={`${styles.container} ${styles.gradientBg}`}>
        <div className={styles.doTitle}>
          <span className={styles.doText} style={{ color: '#ffffff' }}>My Skills</span>
          <progress className={`${styles.lineProg} lineDua`} max="100" value="30"></progress>
        </div>
        <div className={styles.baris} style={{ paddingTop: '30px' }}>
          <div className={styles.skillChoice}>
            <div className={styles.collectionBox}>
              {skill.map((n, i) =>
                <div className={`${styles.logoWrapper} ${styles.visibleLogoWrapper}`} id="logoWrapper" key={i}>
                  <img src={n.image} className={styles.langIcon} alt={`${n.name} icon`}/>
                </div>
              )}
            </div>
            <div className={styles.choice}>
              <div className={styles.choiceIcon}>
                <img onClick={e => {setSkill(native); refresh()}} className={styles.choiceIco} src="/icons/native.png" alt="native logo"/>
                <span className={styles.tooltip}>native</span>
              </div>
              <div className={styles.choiceIcon}>
                <img onClick={e => {setSkill(framework); refresh()}} className={styles.choiceIco} src="/icons/framework.png" alt="framework logo"/>
                <span className={`${styles.tooltip} ${styles.tooltipDua}`}>framework</span>
              </div>
              <div className={styles.choiceIcon}>
                <img onClick={e => {setSkill(designTool); refresh()}} className={styles.choiceIco} src="/icons/design-tools.png" alt="design tools logo"/>
                <span className={styles.tooltip}>design tool</span>
              </div>
            </div>
          </div>
          <InfoSkill />
        </div>
      </div>
    </Fragment>
  );
}

const InfoSkill = ({name, skill, image, id}) => {
  return (
    <Fragment>
      <div className={styles.infoWrapper}>

      </div>
    </Fragment>
  );
}