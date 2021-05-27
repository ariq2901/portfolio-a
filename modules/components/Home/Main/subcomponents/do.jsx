import { Fragment, useEffect, useState } from 'react';
import styles from '@styles/main.module.css';

export const Do = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset / 150;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollPattern() {
    const pattern = document.getElementById("pattern");
    pattern.style.transform = `rotate(${scrollPosition}rad)`;
    // pattern.style.transition = "transform "
    // console.log('scrollPosition', scrollPosition);
  }

  useEffect(() => {
    scrollPattern();
  }, [scrollPosition]);

  return (
    <Fragment>
      <div className="relative w-full mx-auto px-10 pt-14 sm:pt-40 pb-24 sm:pb-36 overflow-hidden">
        <div className={styles.pattern} id="pattern"></div>
        <div className="w-full inline-flex flex-col pt-5">
          <span className="font-poppins font-semibold text-lg sm:text-xl text-base-font">What I Do</span>
          <progress className="w-20 sm:w-8-percent h-2-px rounded-35" max="100" value="30"></progress>
        </div>
        <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-10">

          <div className="w-full grid grid-cols-1 sm:grid-cols-skill text-center sm:text-left">
            <div className="w-38px justify-self-center sm:justify-self-start" data-aos="fade-left" data-aos-duration="500">
              <img className="w-full" src="/icons/frontend.svg" alt="design icon" />
            </div>
            <div className="w-full box-border flex flex-col" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
              <span className="font-poppins font-semibold text-base text-base-font mt-1 sm:mt-0">Frontend Developer</span>
              <span className="mt-2-px sm:mt-2 font-poppins text-almost-13 text-long-font">I like the interface that look stunning on the website, some of the websites I have created are directly inspired by elegant websites and turn them into something more eye-catching for many to see!</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-skill text-center sm:text-left">
            <div className="w-38px justify-self-center sm:justify-self-start" data-aos="fade-left" data-aos-duration="600" data-aos-delay="600">
              <img className="w-full" src="/icons/ecommerce.svg" alt="design icon" />
            </div>
            <div className="w-full box-border flex flex-col" data-aos="fade-right" data-aos-duration="700" data-aos-delay="900">
              <span className="font-poppins font-semibold text-base text-base-font mt-1 sm:mt-0">Ecommerce</span>
              <span className="mt-2-px sm:mt-2 font-poppins text-almost-13 text-long-font">After exploring website creation using several modern programming languages. I started building a web marketplace application that worked properly. Sometimes a lot of technology from marketplace features that I have learned and used as a reference to make the application more interesting</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-skill text-center sm:text-left">
            <div className="w-38px justify-self-center sm:justify-self-start" data-aos="fade-left" data-aos-duration="800" data-aos-delay="1200">
              <img className="w-full" src="/icons/design.svg" alt="design icon" />
            </div>
            <div className="w-full box-border flex flex-col" data-aos="fade-right" data-aos-duration="900" data-aos-delay="1500">
              <span className="font-poppins font-semibold text-base text-base-font mt-1 sm:mt-0">Designing</span>
              <span className="mt-2-px sm:mt-2 font-poppins text-almost-13 text-long-font">Before writing lines of code, I usually make an initial sketch of the view that will be created. Writing code will be much easier for me than when i don't have a clue about what interface to build later</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-skill text-center sm:text-left">
            <div className="w-38px justify-self-center sm:justify-self-start" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1800">
              <img className="w-full" src="/icons/backend.svg" alt="backend icon" />
            </div>
            <div className="w-full box-border flex flex-col" data-aos="fade-right" data-aos-duration="1100" data-aos-delay="2300">
              <span className="font-poppins font-semibold text-base text-base-font mt-1 sm:mt-0">Backend Developer</span>
              <span className="mt-2-px sm:mt-2 font-poppins text-almost-13 text-long-font">Just like in my brief description above, I like to write lines of logic code that can be used to handle the process of the application that is being used by the user. Usually I am a lot of work in making Restful API</span>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}