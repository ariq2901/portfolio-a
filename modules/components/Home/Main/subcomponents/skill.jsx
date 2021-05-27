import { Fragment, useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types';
import styles from '@styles/main.module.css';

import { AnimateSharedLayout, motion } from "framer-motion";
import useWindowDimensions from "@components/Tools";

const logoWrapper = {
  hover: {
    cursor: "pointer",
    rotate: [0, 5, -5, 4, -5, 2, -2, 1, 0],
    transition: {
      duration: .5
    }
  }
}

export const Skill = () => {

  const [skill, setSkill] = useState([]);
  const [info, setInfo] = useState([]);
  const [rerun, setRerun] = useState(false);

  useEffect(() => {
    if (skill.length < 1) {
      setSkill(native);
    }
  }, [skill]);

  const native = [
    {
      "id": 1,
      "name": "Javascript",
      "image": "/icons/js.png",
      "skill": 95,
      "color": "#fdfd0a"
    },
    {
      "id": 2,
      "name": "CSS",
      "image": "/icons/css.png",
      "skill": 96,
      "color": "#0e7eff"
    },
    {
      "id": 3,
      "name": "Dart",
      "image": "/icons/dart.png",
      "skill": 85,
      "color": "#0048ef"
    },
    {
      "id": 4,
      "name": "HTML",
      "image": "/icons/html.png",
      "skill": 98,
      "color": "#ff740d"
    },
    {
      "id": 5,
      "name": "PHP",
      "image": "/icons/php.png",
      "skill": 94,
      "color": "#a12dff"
    },
    {
      "id": 6,
      "name": "Java",
      "image": "/icons/java.webp",
      "skill": 80,
      "color": "#ffffff"
    },
  ];

  const framework = [
    {
      "id": 7,
      "name": "Bootstrap",
      "image": "/icons/bootstrap.png",
      "skill": 98,
      "color": "#7200ce"
    },
    {
      "id": 8,
      "name": "Laravel",
      "image": "/icons/laravel.png",
      "skill": 97,
      "color": "#ff0707"
    },
    {
      "id": 9,
      "name": "React",
      "image": "/icons/react.png",
      "skill": 95,
      "color": "#07dbff"
    },
    {
      "id": 10,
      "name": "Codeigniter",
      "image": "/icons/codeigniter.png",
      "skill": 90,
      "color": "#ff7b07"
    },
  ];

  const designTool = [
    {
      "id": 11,
      "name": "Adobe XD",
      "image": "/icons/xd.png",
      "skill": 90,
      "color": "#ff076c"
    },
    {
      "id": 12,
      "name": "Photoshop",
      "image": "/icons/photoshop.png",
      "skill": 92,
      "color": "#072fff"
    }
  ];

  const scaleAnimate = {
    scale: 1.1,
    transition: {
      duration: .2
    }
  };

  function refresh() {
    setTimeout(() => {
      var logo = document.getElementsByClassName(styles.logoWrapper);
      for (let i = 0; i < logo.length; i++) {
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
      <div className={`relative w-full pt-1 sm:pt-10 px-10 overflow-hidden ${styles.gradientBG}`}>
        <div className="w-full inline-flex flex-col pt-2 sm:pt-5">
          <span className="font-poppins font-semibold text-lg sm:text-xl text-base-font">My Skills</span>
          <progress className="w-20 sm:w-8-percent h-2-px rounded-35" max="100" value="30"></progress>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-5 sm:mt-60px gap-70px sm:gap-0">
          <div className="w-full relative h-full order-last sm:order-1">
            <AnimateSharedLayout>
              <div className="py-10px px-4 sm:ml-4 w-full sm:w-3/4 grid grid-cols-3 h-36 sm:h-230px box-border place-items-center rounded-lg overflow-hidden shadow-lg">
                {skill.map((n, i) =>
                  <Item
                    keys={i}
                    color={n.color}
                    image={n.image}
                    name={n.name}
                    isSelected={selected === n.color}
                    onClick={() => { setSelected(n.color); setInfo(n); setRerun(true) }}
                  />
                )}
              </div>
            </AnimateSharedLayout>
            <div className="absolute w-full sm:w-3/4 h-14 sm:h-69px grid grid-cols-3 place-items-center mt-2 sm:mt-15px ml-0 sm:ml-17px rounded-lg sm:rounded-2xl bg-glass shadow-md">
              <div className="relative w-1/3 sm:w-1/5">
                <motion.img whileHover={scaleAnimate} onClick={e => { setSkill(native); refresh() }} className={`cursor-pointer w-full filter invert-22 sepia-6 saturate-185 contrast-96 ${styles.choiceIco}`} src="/icons/native.png" alt="native logo" />
                <span className={styles.tooltip}>native</span>
              </div>
              <div className="relative w-1/3 sm:w-1/4">
                <motion.img whileHover={scaleAnimate} onClick={e => { setSkill(framework); refresh() }} className={`cursor-pointer w-full filter invert-22 sepia-6 saturate-185 contrast-96 ${styles.choiceIco}`} src="/icons/framework.png" alt="framework logo" />
                <span className={`${styles.tooltip} ${styles.tooltipDua}`}>framework</span>
              </div>
              <div className="relative w-1/3 sm:w-1/5">
                <motion.img whileHover={scaleAnimate} onClick={e => { setSkill(designTool); refresh() }} className={`cursor-pointer w-full filter invert-22 sepia-6 saturate-185 contrast-96 ${styles.choiceIco}`} src="/icons/design-tools.png" alt="design tools logo" />
                <span className={styles.tooltip}>design tool</span>
              </div>
            </div>
          </div>
          <InfoSkill data={info} rerun={rerun} />
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
          transition={spring}
        />
      )}
      <img src={image} className={styles.langIcon} alt={`${name} icon`} />
    </div>
  );
}

const InfoSkill = ({ data, rerun }) => {
  const [info, setInfo] = useState([]);
  const [circleSize, setCircleSize] = useState(250);
  const [strokeSize, setStrokeSize] = useState(15);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 640) {
        setCircleSize(250);
        setStrokeSize(15);
      }
      if (window.innerWidth < 640) {
        setCircleSize(156);
        setStrokeSize(10)
      }
    }

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const dummy =
  {
    "id": 20,
    "name": "Select The skill",
    "image": "/icons/native.png",
    "skill": 0
  };
  useEffect(() => {
    if (data.length == 0) {
      setInfo(dummy);
    } else {
      setInfo(data);
    }
  }, [data]);

  useEffect(() => {
    if (rerun) {
      refreshDua();
    }
  }, [data]);

  function refreshDua() {
    var arrow = document.getElementById("arroq");
    arrow.classList.remove(styles.arrowImgActive);
    setTimeout(() => {
      arrow.classList.add(styles.arrowImgActive);
    }, 100);
  };

  return (
    <Fragment>
      <div className="rounded-2xl w-full bg-glass2 shadow-md h-125-percent grid place-items-center grid-cols-1 sm:grid-cols-2 px-10 box-border order-1 sm:order-last">
        <div className="w-full h-full hidden sm:flex justify-center items-center">
          <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <div className="w-54-percent overflow-hidden">
              <img src={info.image} className="w-full" alt={`${info.name} icon`} />
            </div>
            <span className="font-poppins text-base-font text-2xl text-center">{info.name}</span>
          </div>
          <div className="w-35-percent h-auto overflow-hidden">
            <img className={`${styles.arrowImg} ${styles.arrowImgActive}`} id="arroq" src="/adt-img/arrow.png" alt="arrow img" />
          </div>
        </div>
        <div className="w-44 h-44 sm:w-270px flex justify-center items-center rounded-full sm:h-270px bg-secondary-color">
          <CircleBar progress={info.skill} size={circleSize} strokeWidth={strokeSize} circleOneStroke="none" circleTwoStroke="#fff" />
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
      <svg className="block max-w-full relative" width={size} height={size}>
        <circle className="fill-none" stroke={circleOneStroke} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
        <circle className="fill-none" stroke={circleTwoStroke} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} ref={circleRef} strokeDashoffset={offset} strokeLinecap={linecap} />
        <text className="text-2xl sm:text-3xl fill-fff font-poppins" style={{ textAnchor: "middle" }} x={`${center + (2 * size / 100)}`} y={`${center + (2 * size / 100)}`}>{progress}%</text>
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