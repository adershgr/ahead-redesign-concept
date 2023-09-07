
"use client"
import React, { useEffect, useRef } from 'react';
import './MeetsAhead.css';
import Lottie from 'lottie-react';
import catData from '../json/cat.json';
import { gsap } from 'gsap';

function MeetsAhead() {
  const headingRef = useRef(null);
  useEffect(() => {
    const heading = headingRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(heading, {
            x: -50,
            y: -50,
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          });
        }
      });
    }, options);
    observer.observe(heading);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="manifesto" className='container meetahead-container'>
      <div className='meetaheadpage-container'>
        <div className='left-meetaheadcontent'>
          <div className="ma-head">
            <h6 className="hover-transition">Build out of frustration</h6>
            <h1 className='fw-bold' ref={headingRef}>Meet the ahead app</h1>
          </div>

          <div className='svg-meetaheadcontainer'>
            <Lottie animationData={catData} />
          </div>
        </div>
        <div className='right-meetaheadcontent'>
          <div className='m-3'>
            <p>A personalized pocket coach that provides bite-sized science-driven tools to boost emotional intelligence.</p>
            <br></br>
            <p>Think of it as a perfect cheerleader towards a better, more fulfilling life.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetsAhead;
