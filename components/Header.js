"use client";
import React from 'react';
import styles from './Header.module.css';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import icon from '../images/violet.png';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className='container'>
        <div className={`container-fluid d-flex justify-content-between align-items-center py-2`}>
          <div className="flex-grow-1" style={{ marginRight: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
              <Image src={icon} width={70} alt="icon" style={{ borderRadius: '15%' }} />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-grow-2">
            <a href="#" className=" text-black text-decoration-none mx-2">
              Emotions
            </a>
            <a href="#manifesto" className="text-black text-decoration-none mx-2">
              Manifesto
            </a>
            <a href="#self-awareness" className="text-black text-decoration-none mx-2">
              Self-awareness test
            </a>
            <a href="#work-with-us" className="text-black text-decoration-none mx-2">
              Work with us
            </a>
          </div>
          <div className="flex-grow-1 d-flex justify-content-end" style={{ marginLeft: '10px', marginRight: '10px' }}>
            <Button variant="dark" className="rounded-pill pe-3">Download app</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

