import { Fragment, useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types';
import styles from '@styles/main.module.css';

import { AnimateSharedLayout, motion } from "framer-motion";

export const Skill = () => {

  const [skill, setSkill] = useState([]);
  const [info, setInfo] = useState([]);
  const [rerun, setRerun] = useState(false);

  useEffect(() => {
    if(skill.length < 1) {
      setSkill(native);
    }
  }, [skill]);

  const native = [
    {
      "id" : 1,
      "name" : "Javascript",
      "image" : "/icons/js.png",
      "skill" : 95,
      "color" : "#fdfd0a"
    },
    {
      "id" : 2,
      "name" : "CSS",
      "image" : "/icons/css.png",
      "skill" : 96,
      "color" : "#0e7eff"
    },
    {
      "id" : 3,
      "name" : "Dart",
      "image" : "/icons/dart.png",
      "skill" : 85,
      "color" : "#0048ef"
    },
    {
      "id" : 4,
      "name" : "HTML",
      "image" : "/icons/html.png",
      "skill" : 98,
      "color" : "#ff740d"
    },
    {
      "id" : 5,
      "name" : "PHP",
      "image" : "/icons/php.png",
      "skill" : 94,
      "color" : "#a12dff"
    },
    {
      "id" : 6,
      "name" : "Java",
      "image" : "/icons/java.webp",
      "skill" : 80,
      "color" : "#ffffff"
    },
  ];

  const framework = [
    {
      "id" : 7,
      "name" : "Bootstrap",
      "image" : "/icons/bootstrap.png",
      "skill" : 98,
      "color" : "#7200ce"
    },
    {
      "id" : 8,
      "name" : "Laravel",
      "image" : "/icons/laravel.png",
      "skill" : 97,
      "color" : "#ff0707"
    },
    {
      "id" : 9,
      "name" : "React",
      "image" : "/icons/react.png",
      "skill" : 95,
      "color" : "#07dbff"
    },
    {
      "id" : 10,
      "name" : "Codeigniter",
      "image" : "/icons/codeigniter.png",
      "skill" : 90,
      "color" : "#ff7b07"
    },
  ];

  const designTool = [
    {
      "id" : 11,
      "name" : "Adobe XD",
      "image" : "/icons/xd.png",
      "skill" : 90,
      "color" : "#ff076c"
    },
    {
      "id" : 12,
      "name" : "Photoshop",
      "image" : "/icons/photoshop.png",
      "skill" : 92,
      "color" : "#072fff"
    }
  ];

  const scaleAnimate = {
    scale: 1.1,
    transition: {
      duration: .2
    }
  };

  function refresh()
  {
    setTimeout(() => {
      var logo = document.getElementsByClassName(styles.logoWrapper);
      for(let i=0; i < logo.length; i++) {
        logo[i].classList.remove(styles.visibleLogoWrapper);
        setTimeout(() => {
          logo[i].classList.add(styles.visibleLogoWrapper);
        }, 300);
      }
    }, 1);
  };

  const [selected, setSelected] = useState(native[0].color);
    
  return (
    <Fragment>
      <div className={`${styles.container} ${styles.gradientBG}`}>
        <div className={styles.doTitle}>
          <span className={styles.doText}>My Skills</span>
          <progress className={styles.lineProg} max="100" value="30"></progress>
        </div>
        <div className={styles.baris} style={{ paddingTop: '30px' }}>
          <div className={styles.skillChoice}>
            <AnimateSharedLayout>
              <div className={styles.collectionBox}>
                {skill.map((n, i) =>
                  <Item
                    keys={i}
                    color={n.color}
                    image={n.image}
                    name={n.name}
                    isSelected={selected === n.color}
                    onClick={() => {setSelected(n.color); setInfo(n); setRerun(true)}}
                  />
                )}
              </div>
            </AnimateSharedLayout>
            <div className={styles.choice}>
              <div className={styles.choiceIcon}>
                <motion.img whileHover={scaleAnimate} onClick={e => {setSkill(native); refresh()}} className={styles.choiceIco} src="/icons/native.png" alt="native logo"/>
                <span className={styles.tooltip}>native</span>
              </div>
              <div className={styles.choiceIcon}>
                <motion.img whileHover={scaleAnimate} onClick={e => {setSkill(framework); refresh()}} className={styles.choiceIco} src="/icons/framework.png" alt="framework logo"/>
                <span className={`${styles.tooltip} ${styles.tooltipDua}`}>framework</span>
              </div>
              <div className={styles.choiceIcon}>
                <motion.img whileHover={scaleAnimate} onClick={e => {setSkill(designTool); refresh()}} className={styles.choiceIco} src="/icons/design-tools.png" alt="design tools logo"/>
                <span className={styles.tooltip}>design tool</span>
              </div>
            </div>
          </div>
          <InfoSkill data={info} rerun={rerun}/>
        </div>
      </div>
    </Fragment>
  );
}

function Item({ color, image, name, keys, isSelected, onClick }) {
  return (
    <div layoutId={styles.outline} onClick={onClick} className={`${styles.logoWrapper} ${styles.visibleLogoWrapper} `} id="logoWrapper" key={keys} >
      {isSelected && (
        <motion.div
          key={keys}
          layoutId={styles.outline}
          className={styles.outline}
          initial={false}
          animate={{ borderColor: color }}
          transition={ spring }
        />
      )}
      <img src={image} className={styles.langIcon} alt={`${name} icon`}/>
    </div>
  );
}

const InfoSkill = ({ data, rerun }) => {
  const [info, setInfo] = useState([]);
  const dummy =
    {
      "id" : 20,
      "name" : "Select The skill",
      "image" : "/icons/native.png",
      "skill" : 0
    };
  useEffect(() => {
    if(data.length == 0) {
      setInfo(dummy);
    } else {
      setInfo(data);
    }
  }, [data]);

  useEffect(() =>{
    if(rerun) {
      refreshDua();
    }
  }, [data]);

  function refreshDua()
  {
      var arrow = document.getElementById("arroq");
      arrow.classList.remove(styles.arrowImgActive);
      setTimeout(() => {
        arrow.classList.add(styles.arrowImgActive);
      }, 100);
  };

  return (
    <Fragment>
      <div className={styles.infoWrapper}>
        <div className={styles.infoDetail}>
          <div className={styles.detail}>
            <div className={styles.infoImage}>
              <img src={info.image} className={styles.infoImg} alt={`${info.name} icon`}/>
            </div>
            <span className={styles.infoName}>{info.name}</span>
          </div>
          <div className={styles.arrow}>
            <img className={`${styles.arrowImg} ${styles.arrowImgActive}`} id="arroq" src="/adt-img/arrow.png" alt="arrow img"/>
          </div>
        </div>
        <div className={styles.svgWrapper}>
          <CircleBar progress={info.skill} size={250} strokeWidth={15} circleOneStroke="none" circleTwoStroke="#fff" />
        </div>
      </div>
    </Fragment>
  );
}

const CircleBar = ({ size, progress, strokeWidth, circleOneStroke, circleTwoStroke }) => {
  const center = size / 2;
  
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const linecap = "round";

  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out;';
  }, [setOffset, circumference, progress, offset]);

  return (
    <Fragment>
      <svg className={styles.svg} width={size} height={size}>
        <circle className={styles.svgCircleBg} stroke={circleOneStroke} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
        <circle className={styles.svgCircle} stroke={circleTwoStroke} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} ref={circleRef} strokeDashoffset={offset} strokeLinecap={linecap}/>
        <text className={styles.svgCircleText} x={`${center}`} y={`${center}`}>{progress}%</text>
      </svg>
    </Fragment>
  );
}

CircleBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired
}


const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};