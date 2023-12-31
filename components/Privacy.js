"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import sign from '../images/signature.png';
import './Privacy.css';
import Button from 'react-bootstrap/Button';
import { gsap } from 'gsap';

function Privacy() {
  const privacyRef = useRef(null);

  useEffect(() => {
    const privacy = privacyRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(entry.target, {
            y: 20,
            opacity: 0,
            duration: 1.75,
            ease: 'power2.out',
          });
        }
      });
    }, options);
    observer.observe(privacy);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='container'>
      <div className='m-5' ref={privacyRef}>
        <h6 className='privacy mb-2'>We take privacy seriously</h6>
        <h1 className='fw-bold text-center mb-2'>Before you get started</h1>
        <h6 className='fw-bold text-center mb-2'>"We won't share your answers with anyone (and won't ever tell you which friends said what about you )"</h6>
        <br></br>
        <div className='sign text-center mb-2'>
          <h6>with Love, </h6>
          <Image src={sign} width="20" alt="signature" />
        </div>
        <div className='text-center mt-3'>
          <Button variant="dark" className="rounded-pill mb-2 ps-3 pe-3">Start test</Button>
        </div>
        <h6 className='text-center mb-7'>Take only 5 minutes</h6>
      </div>
    </div>
  );
}

export default Privacy;
