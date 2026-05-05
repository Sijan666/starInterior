import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


export default function Footer() {
  return (
    <>
    <footer>
      <div className="pt-17.5 pb-10 bg-jprimary mt-2">
        <Container>
          <div className="flex flex-col gap-5 lg:gap-0 md:flex-row justify-between items-center border-b border-white/10 pb-7.5">
            <Image src="/footerLogo.png" alt='footerLogo' height={86.44} width={182}/>
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <h3 className='text-[20px] font-bold text-white'>Follow Our Socials</h3>
              <div className="socialIcons flex gap-2.5 items-center">
                <FaFacebookF  className='p-2.5 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
                <FaTwitter   className='p-2.5 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
                <FaInstagram   className='p-2.5 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
                <FaPinterest   className='p-2.5 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
                <FaLinkedinIn   className='p-2.5 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
                <FaYoutube   className='p-2.5 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-7.5 gap-7.5">
            <div className="gridOne">
              <h3 className='font-bold text-[20px] text-white pb-5'>Information</h3>
              <p className='text-base text-white leading-[27.2px]'>Best Interior Design’s unique perception of the available space renders sophisticated, ergonomic, and luxurious design that transforms a house into a home. The touch has been extended to a variety of platforms, including landscapes, office interiors, villas, communities, retail spaces, and even a single room.</p>
            </div>
            <div className="gridTwo">
              <h3 className='font-bold text-[20px] text-white pb-5'>Services</h3>
              <ul className='flex flex-col gap-[7.5px]'>
                <li className='pb-[6.5px] border-b border-white/19 text-base text-white cursor-pointer'>Home Interior Design</li>
                <li className='pb-[6.5px] border-b border-white/19 text-base text-white cursor-pointer'>Office Interior Design</li>
                <li className='pb-[6.5px] border-b border-white/19 text-base text-white cursor-pointer'>Showroom Interior Design</li>
                <li className='pb-[6.5px] border-b border-white/19 text-base text-white cursor-pointer'>Restaurant Interior Design</li>
                <li className='pb-[6.5px] border-b border-white/19 text-base text-white cursor-pointer'>Exterior Design</li>
                <li className='text-base text-white cursor-pointer'>Hotel Interior Design</li>
              </ul>
            </div>
            <div className="gridOne">
              <h3 className='font-bold text-[20px] text-white pb-5'>Contact Us</h3>
              <div className="flex gap-2.5 items-center">
                
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
    </>
  )
}
