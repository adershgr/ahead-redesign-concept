"use client";
import React, { useEffect, useRef } from 'react';
import './Landingpage.css';
import { gsap } from 'gsap';
import Lottie from 'lottie-react';
import animationData from '../json/landing.json';
import review from '../images/fivestar.png';
import appstore from '../images/appstore.png';
import Image from 'next/image';

function Landingpage() {
  const headingRef = useRef(null);
  useEffect(() => {
    const heading = headingRef.current;
    const options = {
      threshold: 0.5,
    };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(heading, {
            x: '0',
            duration: 0.75,
            ease: 'power2.inOut',
          });
        } else {
          gsap.to(heading, {
            x: '-20px',
            duration: 0.1,
          });
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    if (heading) {
      observer.observe(heading);
    }
    return () => {
      if (heading) {
        observer.unobserve(heading);
      }
    };
  }, []);

  return (
    <div className='container landing-container'>
      <div className='landingpage-container'>
        <div className='left-landingcontent'>
          <h6>Ahead app</h6>
          <h1 className='fw-bold' ref={headingRef}>
            <span>Master your life</span>
            <span className="d-block">by mastering</span>
            <span>emotions</span>
          </h1>
          <div className='appstore'>
            <Image src={appstore} width="250" alt='app store' />
            <div className="fivestar">
              <Image src={review} width="150" alt='100+ appstore reviews' />
              <h6 className="text-dark review fivestar">100+ appstore reviews</h6>
            </div>
          </div>
        </div>
        <div className='right-landingcontent'>
          <div className='landing-svg'>
            <div className='svg-landingcontainer'>
              <Lottie animationData={animationData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
