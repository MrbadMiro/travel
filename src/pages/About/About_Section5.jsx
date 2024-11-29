import React from 'react'
import { Ballon } from '../../assets'

const About_Section5 = () => {
  return (
    <div className='flec md:px-24 px-6 py-24 bg-[linear-gradient(90deg,_rgba(178,243,222,0.43)_0%,_rgba(255,255,255,1)_100%)]'>
        <div className='grid grid-cols-3 '>
            <div className='flex flex-col w-full col-span-2'>
                <p className="font-Jost text-[#FF8900] font-bold text-[24px] ">PLAN YOUR TRIP WITH US</p>
                <p className="font-Jost text-[#2B2945] font-bold text-[60px] ">READY FOR AN
                UNFORGETABLE TOUR?</p>
                <div className='flex'>
                <button className='font-Jost text-[#FFFFFF] font-semibold px-4 py-2 rounded-full bg-[#1EC28B] text-[18px]'>Book Your Tours</button>
                </div>
               

            </div>
            <div className="w-full">
                <img src={Ballon} alt="" />
            </div>

        </div>

    </div>
  )
}

export default About_Section5