"use client"
import React, { useEffect, useRef } from 'react';
import './Socialskills.css';
import Lottie from 'lottie-react';
import animationData from '../json/socialComp.json';
import Image from 'next/image';
import ribbon from '../images/ribbon.png';
import { gsap } from 'gsap';

function Socialskills() {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(title, {
            x: -30,
            duration: 0.75,
            ease: 'power2.out',
          });
        }
      });
    }, options);
    observer.observe(title);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="self-awareness" className='container ss-container'>
      <div>
        <h6 className='text-center pt-5'>Let your friends, family, and co-workers (anonymously) rate your social skills</h6>
        <h1 className='text-center fw-bold pb-4 pt-3' ref={titleRef}>Ever wondered what others think of you?</h1>
      </div>
      <div className='ss-text-container pt-4 ribbons'>
        <div className='text-center m-2 px-2'>
          <Image src={ribbon} width="20" alt="ribbon" />
          <h6>Answer questions on your social skills</h6>
        </div>
        <div className='text-center m-2 px-2'>
          <Image src={ribbon} width="20" alt="ribbon" />
          <h6>Let others anonymously answer the same questions about you</h6>
        </div>
        <div className='text-center m-2 px-2'>
          <Image src={ribbon} width="20" alt="ribbon" />
          <h6>See where you and others see things the same way - and where not</h6>
        </div>
      </div>
      <div className='animation'>
        <div className='svg-ssContainer'>
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  );
}

export default Socialskills;
