"use client";
import React from 'react'
import './MeetsAhead.css';
import Lottie from 'lottie-react';
import catData from '../json/cat.json';

function MeetsAhead() {
  return (
    <div className='container meetahead-container '>
      <div className='meetaheadpage-container'>
        <div className='left-meetaheadcontent'>
          <div className="ma-head">
            <h6>Build out of frustration</h6>
            <h1 className='fw-bold'>Meet the ahead app
            </h1>
          </div>

          <div className='svg-meetaheadcontainer'>
            <Lottie animationData={catData} />
          </div>
        </div>
        <div className='right-meetaheadcontent'>
          <div className='m-3'>
            <p>A personalised pocket coach that provide bite sized science driven tools to boost emotional inteliigesnce.</p>
            <br></br>
            <p>Think of it as a perfect cheerleader towards a better, more fulfilling life.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MeetsAhead