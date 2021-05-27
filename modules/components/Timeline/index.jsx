import React, { Fragment, useEffect, useState } from 'react';
import styles from '@styles/main.module.css';
import { motion } from "framer-motion";

const Timeline = () => {

  const [timeline, setTimeline] = useState([]);
  const [timelineType, setTimelineType] = useState('');

  const education = [
    {
      "title" : "SMP Ma'rifatussalaam",
      "info" : "After I graduated from elementary school, I continued my education at Ma'rifatussalaam Middle School. There I was taught about religion & manners that were polite to other people. I graduated in the 3rd year in 2018",
      "time" : "Agustus 2015"
    },
    {
      "title" : "SMK Madinatulquran",
      "info" : "I was studying a Vocational High School (SMK) at SMK Madinatulquran. I took programming as my major. Currently I am studying web based programming as a frontend & backend on a project team at my school.",
      "time" : "Juni 2021"
    },
    {
      "title" : "Wegodev",
      "info" : "the classes I took from the course from Wegodev are React JS Ecommerce, MERN Stack, & Next JS",
      "time" : "October 2020"
    },
    {
      "title" : "Dicoding",
      "info" : "the classes I took from the course from Dicoding are Javascript language, & Cloud practitioner essentials",
      "time" : "Februari 2021"
    }
  ];

  const project = [
    {
      "title" : "Mitra Agro Servindo",
      "info" : "I have been an intern at a company in West Jakarta, PT. Mitra Agro Servindo for 4 months. There I created the E-lab & Company Profile web application of the company.",
      "time" : "Januari 2020"
    },
  ]

  useEffect(() => {
    if(timeline.length < 1) {
      setTimeline(education);
      setTimelineType('education');
    }
  }, timeline);

  return (
    <Fragment>
      <div className="mt-5">
        <h4 className="text-center font-nunito font-semibold text-sm sm:text-xl text-gray-700">{timelineType === 'education' ? 'My Educational Background' : 'My Career Path'}</h4>
        <div className={styles.timeline}>
          <ul className={styles.timelineUl}>
            {timeline.map((edu, i) => 
              <li className={styles.timelineLi} key={i}>
                <div className={styles.content}>
                  <h3 className={styles.timelineTitle}>{edu.title}</h3>
                  <p className={styles.timelineInfo}>{edu.info}</p>
                </div>
                <div className={`${styles.timelineTime} flex items-center justify-center`}>
                  <h4 className={styles.timelineH4}>{edu.time}</h4>
                </div>
              </li>
            )}
            <div style={{clear: 'both'}}></div>
          </ul>
        </div>
        <motion.div drag dragConstraints={{left: 40, right: 0, top: 0, bottom: 30}} className={styles.timelineChoose}>
          <motion.div onClick={e => {setTimeline(education); setTimelineType('education')}} className={styles.timelineBtn}><i className={`fas fa-graduation-cap ${styles.timelineIcon}`}></i></motion.div>
          <motion.div onClick={e => {setTimeline(project); setTimelineType('project')}} className={styles.timelineBtn}><i className={`fas fa-code-branch ${styles.timelineIcon}`}></i></motion.div>
        </motion.div>
      </div>
    </Fragment>
  );
}

export default Timeline;