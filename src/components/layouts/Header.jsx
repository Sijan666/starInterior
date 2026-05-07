'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import Button from '../Button';
import Container from '../Container';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'Services', 'Portfolio', 'Latest Projects', 'About Us', 'Blogs'];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
                scrolled ? 'py-3' : 'py-6'
            }`}
        >
            <Container>
                <div 
                    className={`relative flex items-center justify-between md:px-6 px-2 py-4 mx-auto transition-all duration-500 rounded-2xl ${
                        scrolled 
                        ? 'bg-black/40 backdrop-blur-lg border border-white/20 shadow-lg shadow-black/50' 
                        : 'bg-transparent'
                    }`}>
                    {/* Logo */}
                    <div className="z-50 shrink-0 cursor-pointer">
                        <Image src={'/logo.webp'} alt='logo' className="w-24 md:w-32 h-auto" height={120} width={150}/>
                    </div>
                    {/* lg nav */}
                    <nav className="hidden lg:flex items-center">
                        <ul className='flex gap-x-8 items-center'>
                            {navLinks.map((item, index) => (
                                <li 
                                    key={index} 
                                    className='text-white/90 hover:text-btn text-base font-medium cursor-pointer transition-colors duration-300 relative group'
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-btn transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* lg btn */}
                    <div className="hidden lg:block z-50">
                        <Button 
                            btnText={'Contact Us'} 
                            rightIcon={<FaArrowRight />} 
                            className={'w-38 shadow-lg transition-all duration-300 '} 
                        />
                    </div>
                    {/* mobile nav */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="lg:hidden z-50 text-white text-2xl focus:outline-none "
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <div 
                        className={`absolute top-full mt-4 left-0 w-full lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
                            isMenuOpen ? 'max-h-125 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
                        }`}
                    >
                        <div className="flex flex-col items-center gap-6 p-8 bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl mx-auto w-full">
                            <ul className='flex flex-col gap-5 items-center w-full'>
                                {navLinks.map((item, index) => (
                                    <li 
                                        key={index} 
                                        className='text-white/90 hover:text-white text-lg font-medium cursor-pointer transition-colors duration-300'
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full flex justify-center mt-2">
                                <Button btnText={'Contact Us'} rightIcon={<FaArrowRight />} className={'w-full max-w-50'} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}