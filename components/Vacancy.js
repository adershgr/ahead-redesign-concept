"use client"
import React, { useEffect, useRef } from 'react';
import './vacancy.css';
import { gsap } from 'gsap';

function Vacancy() {
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            titleElement,
            { x: -25, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.75, ease: 'power3.out' }
          );
        }
      });
    }, options);
    observer.observe(titleElement);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="work-with-us"className='container v-container'>
      <div className='ms-5 me-5'>
        <div className=' pt-5'>
          <h1 ref={titleRef} className='text-center fw-bold pb-2'>Open vacancies</h1>
        </div>
        <div className='ss-text-container pt-4'>
          <div className="card-deck">
            <div className="card mt-2 mb-3 rounded-card card1" >
              <div className="card-body">
                <h6 className="card-title fw-bold text-center mb-3 mt-1">Senior Full-Stack Engineer</h6>
                <ul className="text-start">
                  <li>Full-time position</li>
                  <li>Berlin or remote</li>
                  <li>€65-80k, 0.5-1.50% equity share options</li>
                </ul>
              </div>
            </div>
            <div className="card mt-2 mb-3 rounded-card card1" >
              <div className="card-body">
                <h6 className="card-title fw-bold mb-3 mt-1 text-center">Senior Designer</h6>
                <ul className="text-start">
                  <li>Full-time position</li>
                  <li>Berlin or remote</li>
                  <li>€40-50k, 0.25-0.50% equity share options</li>
                </ul>
              </div>
            </div>
            <div className="card mt-2 mb-3 rounded-card card1" >
              <div className="card-body">
                <h6 className="card-title fw-bold mb-3 mt-1 text-center">Superstar Intern</h6>
                <ul className="text-start">
                  <li>Full-time position</li>
                  <li>Berlin or remote</li>
                  <li>€20-24k, 0.25-0.50% equity share options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vacancy