import React, { Fragment, useEffect, useState } from 'react';
import styles from '@styles/main.module.css';
import { motion } from "framer-motion";

const Timeline = () => {

  const [timeline, setTimeline] = useState([]);

  const education = [
    {
      "title" : "Sekolah Alam Depok",
      "info" : "Saya memulai sekolah dasar saya di beberapa sekolah, dan menjadi wisudawan dari murid Sekolah Alam Depok. Disana saya belajar bagaimana caranya menjadi seorang yang mandiri & intelektual. Saya lulus dari Sekolah dasar itu pada tahun 2015",
      "time" : "Juni 2010"
    },
    {
      "title" : "SMP Ma'rifatussalaam",
      "info" : "Setelah saya lulus dari Sekolah Dasar, saya melanjutkan jenjang pendidikan saya di SMP Ma'rifatussalaam. Disana saya diajarkan tentang ilmu agama & adab-adab yang sopan kepada sesama orang lain. Sya lulus ditahun ke-3 pada tahun 2018",
      "time" : "Agustus 2015"
    },
    {
      "title" : "SMK Madinatulquran",
      "info" : "Saat ini saya sedang menempuh jenjan pendidikan Sekolah Menengah Kejuruan (SMK) di SMK Madinatulquran. Saya mengambil programming sebagai jurusan yang saya tempuh, Saat ini saya sedang mendalami web based programming sebagai frontend & backend di project tim di sekolah saya",
      "time" : "On going"
    },
    {
      "title" : "Wegodev",
      "info" : "Sembari belajar pemrograman di sekolah, saya juga mengambil kursus pemrograman website dari kursus online di Wegodev.",
      "time" : "On going"
    }
  ];

  const project = [
    {
      "title" : "Skytours",
      "info" : "Kali ini saya bersama tim saya mengerjakan project Progressive Web App Travel Ageny berbasis Web. Dan ini adalah project yang diikutsertakan dalam lomba It-expo UNJ 2020",
      "time" : "October 2020"
    },
    {
      "title" : "Mitra Agro Servindo",
      "info" : "Saat di Praktek Kerja Lapangan, saya bersama partner Pkl saya, membuat company profile website untuk PT. Mitra Agro Servindo di Jakarta Barat.",
      "time" : "Januari 2020"
    },
    {
      "title" : "E-Lab Mitra Agro Servindo",
      "info" : "Saat di Praktek Kerja Lapangan, saya bersama partner Pkl saya membuat aplikasi pengelolaan lab untuk PT. Mitra Agro Servindo",
      "time" : "Maret 2020"
    }
  ]

  useEffect(() => {
    if(timeline.length < 1) {
      setTimeline(education)
    }
  }, timeline);

  return (
    <Fragment>
      <div className={styles.timeline}>
        <ul className={styles.timelineUl}>
          {timeline.map((edu, i) => 
            <li className={styles.timelineLi} key={i}>
              <div className={styles.content}>
                <h3 className={styles.timelineTitle}>{edu.title}</h3>
                <p className={styles.timelineInfo}>{edu.info}</p>
              </div>
              <div className={styles.timelineTime}>
                <h4 className={styles.timelineH4}>{edu.time}</h4>
              </div>
            </li>
          )}
          <div style={{clear: 'both'}}></div>
        </ul>
      </div>
      <motion.div drag dragConstraints={{left: 40, right: 0, top: 0, bottom: 30}} className={styles.timelineChoose}>
        <motion.div onClick={e => setTimeline(education)} className={styles.timelineBtn}><i className={`fas fa-graduation-cap ${styles.timelineIcon}`}></i></motion.div>
        <motion.div onClick={e => setTimeline(project)} className={styles.timelineBtn}><i className={`fas fa-code-branch ${styles.timelineIcon}`}></i></motion.div>
      </motion.div>
    </Fragment>
  );
}

export default Timeline;