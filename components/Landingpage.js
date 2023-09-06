"use client";
import React from 'react';
import './Landingpage.css';
import Lottie from 'lottie-react';
import animationData from '../json/landing.json';
import review from '../images/fivestar.png'
import appstore from '../images/appstore.png'
import Image from 'next/image';

function Landingpage() {
    return (
        <div className='container landing-container'>
            <div className='landingpage-container'>
                <div className='left-landingcontent'>
                    <h6>Ahead app</h6>
                    <h1 className='fw-bold'>
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
                    <div className='svg-landingcontainer'>
                        <Lottie animationData={animationData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;