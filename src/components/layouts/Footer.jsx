import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiNavigation, FiPhone } from 'react-icons/fi'
import { TbMailOpened } from 'react-icons/tb'
import Button from '../Button'
import { BiRightArrow } from 'react-icons/bi'


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
            <div className="gridThree">
              <h3 className='font-bold text-[20px] text-white pb-5'>Contact Us</h3>
              <div className="flex gap-2.5 items-center">
                <FiPhone className='w-10 h-10 p-2.5 text-white rounded-full hover:border-white duration-300 border border-white/10' />
                <p className='text-base text-white'>+88 01712529919</p>
              </div>
              <div className="flex gap-2.5 items-center mt-3.75">
                <TbMailOpened  className='w-10 h-10 p-2.5 text-white rounded-full hover:border-white duration-300 border border-white/10' />
                <p className='text-base text-white'>info.bestinteriordesign@gmail.com</p>
              </div>
              <div className="flex gap-2.5 items-center mt-3.75">
                <FiNavigation   className='w-10 h-10 p-2.5 text-white rounded-full hover:border-white duration-300 border border-white/10' />
                <div className="text">
                  <p className='text-base text-white'>Level-02, House-31, Probal </p>
                  <p className='text-base text-white'>Housing, Ring Road, Adabor,</p>
                  <p className='text-base text-white'>Mohammadpur, Dhaka 1207</p>
                  <Button btnText={'View Google Map'} className={'mt-1'}/>
                </div>
              </div>
            </div>
            <div className="gridFour">
              <h3 className='font-bold text-[20px] text-white pb-5'>Get The Latest Trending News</h3>
              <p className='text-base text-white leading-[27.2px]'>Your Dream Space Starts Here Get Exclusive Design Straight Your Inbox!</p>
              <div className="mt-5 flex items-center">
                <input type="email" placeholder='Enter your email' className='px-2.5 py-4 bg-white  outline-none'/>
                <div className="px-2.5 py-4 bg-white">
                  <BiRightArrow/>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
    </>
  )
}
