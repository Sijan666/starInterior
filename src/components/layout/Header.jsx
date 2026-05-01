import React from 'react'
import Container from '../common/Container'
import Button from '../common/Button'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { FaArrowRight } from 'react-icons/fa';

export default function Header() {
    return (
        <>
        <header>
            <Container>
                <div className="py-5 flex justify-between items-center border-b border-white/10">
                    {/* logo */}
                    <div className="logo">
                        <Image src={logo} alt='logo'/>
                    </div>
                    {/* navbar */}
                    <nav>
                        <ul className='flex items-center gap-x-7'>
                            <li className='text-white text-base cursor-pointer hover:text-btn duration-300'>Home</li>
                            <li className='text-white text-base cursor-pointer hover:text-btn duration-300'>Services</li>
                            <li className='text-white text-base cursor-pointer hover:text-btn duration-300'>Portfolio</li>
                            <li className='text-white text-base cursor-pointer hover:text-btn duration-300'>Latest Projects</li>
                            <li className='text-white text-base cursor-pointer hover:text-btn duration-300'>About Us</li>
                            <li className='text-white text-base cursor-pointer hover:text-btn duration-300'>Blogs</li>
                        </ul>
                    </nav>
                    {/* button */}
                    <Button btnText={'Contact Us'} rightIcon={<FaArrowRight />} />
                </div>
            </Container>
        </header>
        </>
    )
}
