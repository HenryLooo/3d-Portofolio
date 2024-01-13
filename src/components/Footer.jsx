import React, {useState} from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { socials } from '../constants/constants'
import { Link } from 'react-router-dom'
import linkedin from "../assets/tech/linkedin.svg";
import github from "../assets/tech/github.svg";
import instagram from "../assets/tech/instagram.svg";


const Footer = () => {
    
  return (
    <section className='grid md:grid-row my-12 md:my-12 py- gap-4 relative justify-center self-center'>
        <h5 className='text-5xl font-bold text-white my-2 text-center'>
                Let&apos;s Connect!
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md text-2xl text-center '>
            I am always looking for opportunities to learn new things or
            sharpen existing skills. Whether you have a question or just wanted to contact me, you can do so here!
        </p>
        
        <div className='flex flex-row flex-wrap justify-center'>
          <a href="https://www.linkedin.com/in/henry-arthur-zhongsan-liu/" >
            <img src= {linkedin} alt="" />
          </a>
          <a href="https://instagram.com/henryarthurr">
            <img src= {instagram} alt="" className=' w-[50px]' />
          </a>
          <a href="https://github.com/HenryLooo">
            <img src= {github} alt="" className=' w-[45px] mt-0.5' />
          </a>
        </div>
        

        {/* {socials.map((social)=>(
        <div className='w-28 h-28'
        key={social.name}>

          <BallCanvas
            icon={social.icon}
          />
        </div>
        ))} */}
    </section>
  )

}

export default SectionWrapper(Footer,"")