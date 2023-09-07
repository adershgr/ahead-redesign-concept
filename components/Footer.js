import React from 'react'
import Image from 'next/image'
import violet from '../images/violet.png'

function Footer() {
  return (
    <div>
        <hr className='mb-5'></hr>
        <div className='d-flex justify-content-center mb-1'>
        <Image src={violet} width={70} alt="icon" style={{ borderRadius: '15%' }} />
        </div>
             <h3 className='mb-3 d-flex justify-content-center fw-bold' style={{ color: '#7426c7' }}>ahead</h3>
        
        
    </div>
  )
}

export default Footer