"use client"
import React from 'react';
import './Socialskills.css'
import Lottie from 'lottie-react';
import animationData from '../json/socialComp.json';
import Image from 'next/image';
import ribbon from '../images/ribbon.png'

function Socialskills() {
    return (
        <div className='container ss-container'>
            <div >
                <h6 className='text-center pt-5'>Let your friends, family and co-workers(anonymously) rate your social skills</h6>
                <h1 className='text-center fw-bold pb-4'>Ever wondeered what others think of you?</h1>
            </div>
            <div >
                <div className='ss-text-container pt-4'>
                    <div className='text-center m-1'>
                        <Image src={ribbon} width="20" alt="ribbon" />
                        <h6>Answer questions on your social skills</h6>
                    </div>
                    <div className='text-center m-1'>
                        <Image src={ribbon} width="20" alt="ribbon" />
                        <h6>Let others anonymously answet the same questions about you</h6></div>
                    <div className='text-center m-1'>
                        <Image src={ribbon} width="20" alt="ribbon" />
                        <h6>See where you and others see things the same way - and where not</h6></div>

                </div>
                <div className='svg-ssContainer text-center'>
                    <Lottie animationData={animationData} />
                </div>
            </div>
        </div>
    )
}

export default Socialskills