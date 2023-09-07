"use client"

import React, { useEffect, useRef } from 'react';
import './Eq.css';
import gsap from 'gsap';

function Eq() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            titleElement,
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
          gsap.fromTo(
            subtitleElement,
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        }
      });
    }, options);

    // Observe both the title and subtitle elements
    observer.observe(titleElement);
    observer.observe(subtitleElement);

    // Clean up the observer when the component unmounts
    return () => {
      observer.unobserve(titleElement);
      observer.unobserve(subtitleElement);
    };
  }, []);

  return (
    <div className='container'>
      <div className='top'>
        <div className='eq'>
          <h2 ref={titleRef} className='eq-header col-md-4 fw-bold ms-5 text-center'>Eq Beats IQ</h2>
          <div className='eq'>
            <p className='col-md-6 pe-3 me-3 ms-3 text-start'>People with more High Emotional intelligence have a more fulfilled life. They tend to be happier and have healthy relationships.</p>
            <p className='col-md-6 padding-end'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
        <div>
          <h1 ref={subtitleRef} className='mb-4 fw-bold mt-4'>Does this sound familiar...</h1>
          <div className="card-deck">
            <div className="card mt-2 mb-3 rounded-card card1" >
              <div className="card-body">
                <h6 className="card-title fw-bold mt-2 text-center">You attended a class reunion</h6>
                <p className="card-text card-text-small text-center">You compare yourself with the peers' achievements instead of making your self-judgment more independent of others.</p>
              </div>
            </div>
            <div className="card mt-2 mb-3 rounded-card card2" >
              <div className="card-body">
                <h6 className="card-title fw-bold mt-2 text-center">You are at a lively dinner party</h6>
                <p className="card-text card-text-small text-center">You play on your phone instead of confidently approaching strangers and striking up a chat.</p>
              </div>
            </div>
            <div className="card mt-2 mb-3 rounded-card card3" >
              <div className="card-body">
                <h6 className="card-title fw-bold mt-2 text-center">You hit a dead end in a negotiation</h6>
                <p className="card-text card-text-small text-center">You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented.</p>
              </div>
            </div>
            <div className="card mt-2 mb-3 rounded-card card4" >
              <div className="card-body">
                <h6 className="card-title fw-bold mt-2 text-center">You get a promotion at work</h6>
                <p className="card-text card-text-small text-center">You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself and your abilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eq;
