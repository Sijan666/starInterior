import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


export default function Footer() {
  return (
    <>
    <footer>
      <div className="pt-17.5 pb-10 bg-[#192324] mt-2">
        <Container>
          <div className="flex justify-between items-center border-b border-white/10 pb-7.5">
            <Image src="/footerLogo.png" alt='footerLogo' height={86.44} width={182}/>
            <div className="flex gap-5 items-center">
              <h3 className='text-[20px] font-bold text-white'>Follow Our Socials</h3>
              <div className="socialIcons flex gap-2.5 items-center">
                <FaFacebookF size={25} className='p-3 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
                <FaTwitter  size={25} className='p-3 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
                <FaInstagram  size={25} className='p-3 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
                <FaPinterest  size={25} className='p-3 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
                <FaLinkedinIn  size={25} className='p-3 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
                <FaYoutube  size={25} className='p-3 bg-white rounded-full text-btn h-10 w-10 cursor-pointer'/>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
    </>
  )
}
