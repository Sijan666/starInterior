import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { FaArrowRight } from 'react-icons/fa';
import Button from '../Button';
import Container from '../Container';

export default function Header() {
    return (
        <>
        <header className='lg:fixed lg:top-0 lg:left-0 lg:w-full'>
            <Container>
                <div className="py-5 flex flex-col lg:flex-row gap-5 justify-between items-center border-b border-white/10">
                    {/* logo */}
                    <div className="logo">
                        <Image src={logo} alt='logo'/>
                    </div>
                    {/* navbar */}
                    <nav>
                        <ul className='flex flex-col lg:flex-row gap-10 items-center gap-x-10'>
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
