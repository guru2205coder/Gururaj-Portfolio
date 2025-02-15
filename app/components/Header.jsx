import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8, type: 'spring', stiffness: 100}}
        >
            <Image src={assets.profile_img} alt='' className='rounded-full w-36'/>
           
        </motion.div>
        <motion.h3
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6, delay:0.3}}
         className='flex items-end gap-2 text-2xl md:text-3xl mb-3 font-Ovo'>Hi! I'm Gururaj Kaki 
        <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>

        <motion.h1
        initial={{y:-30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.8, delay:0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Aspiring Software Engineer based in India.</motion.h1> 


        <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.7}}

        className='max-w-2xl mx-auto font-Ovo '>
        I am a BTech student at Ajeenkya DY Patil University, specializing in Java and full-stack development. 
        I have worked on multiple projects, including a Student Management System, a Hotel Reservation ERP, and a Tailor Measurements System.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-7'>
            <motion.a 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.7}}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:bg-slate-300 hover:text-black transition-all duration-500'
            >Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>

            <motion.a 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.7}}

            href="/Gururaj-resume.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-600 flex items-center gap-2 dark:bg-white  hover:bg-amber-100 transition-all duration-500 dark:text-black'>
            My resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>
    </div>
  )
}

export default Header