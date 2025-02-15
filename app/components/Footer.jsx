import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarMode ? assets.mail_icon_dark :assets.mail_icon} alt='' className='w-6'/>
                gururajkaki2@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Gururaj kaki. All rights reserved.</p>
            
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://www.linkedin.com/in/gururaj-kaki-877937318/">Linkdin</a></li>
                <li><a target='_blank' href="https://www.instagram.com/http.guru2003?igsh=dGpvd3BxbHM4bHZj">Instagram</a></li>
                <li><a target='_blank' href="https://wa.me/9175344556">Whats App</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer