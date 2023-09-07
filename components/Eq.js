"use client"
import React, { useEffect, useRef } from 'react';
import './Eq.css';
import gsap from 'gsap';

function Eq() {
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;

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
            { x: -50, scale: 0.5, opacity: 0 },
            { x: 50, scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        }
      });
    }, options);
    observer.observe(titleElement);
    return () => {
      observer.unobserve(titleElement);
    };
  }, []);


  return (
    <div className='container'>
      <div className='top'>
        <div className='eq'>
          <h2 className='eq-header col-md-4 fw-bold'>Eq Beats IQ</h2>
          <div className='eq'>
            <p className='col-md-6 pe-3 me-3 ms-3 text-start'>People with more High Emotional intelligence has live more fulfilleed life. They tend to be happier and have healthy relationships</p>
            <p className='col-md-6'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
        <div>
          <h1 ref={titleRef} className='mb-4 fw-bold mt-4'>Does this sound familiar...</h1>
          <div className="card-deck">
            <div className="card mt-2 mb-3 rounded-card card1" >
              <div className="card-body">
                <h6 className="card-title fw-bold mt-2 text-center">You attended a class reunion</h6>
                <p className="card-text card-text-small text-center">You compare yourself with the peers achievement instead of making your self judgement more independent of others.</p>
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
                <h6 className="card-title fw-bold mt-2 text-center">You hit dead end in a negotiation</h6>
                <p className="card-text card-text-small text-center"> Youget nervous, frzzled and frustrated, instead of staying optimistic and solution-oriented.</p>
              </div>
            </div>
            <div className="card mt-2 mb-3 rounded-card card4" >
              <div className="card-body">
                <h6 className="card-title fw-bold mt-2 text-center">You get a promotion at work</h6>
                <p className="card-text card-text-small text-center">You question yourseelf and wonder when they'll realize you're an unqualidfied imposter, Instead of trusting yourself and your abilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eq;
