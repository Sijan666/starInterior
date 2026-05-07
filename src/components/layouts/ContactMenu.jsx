"use client";

import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ContactMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 flex flex-col items-end z-50">
        <div
            className={`flex flex-col items-end gap-4 mb-4 transition-all duration-300 ease-in-out ${
            isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"}`}>
            {/* WhatsApp Button */}
            <div className="group relative flex items-center">
                <span className="absolute right-14 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-md opacity-0 transition-opacity group-hover:opacity-100">
                    WhatsApp
                </span>
                <Link href="https://wa.me/01828871277" target="_blank" rel="noopener noreferrer">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110">
                    <FaWhatsapp size={24} /> 
                    </button>
                </Link>
            </div>
            {/* Phone Button */}
            <div className="group relative flex items-center">
                <span className="absolute right-14 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-md opacity-0 transition-opacity group-hover:opacity-100">
                    Call us
                </span>
                <a 
                    href="tel: +8801828871277"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110">
                    <Phone size={24} />
                </a>
            </div>
        </div>
        {/* 2. Main Toggle Button */}
        <div className="group relative flex items-center">
            {/* Main Tooltip */}
            <span className="absolute right-16 whitespace-nowrap rounded-2xl bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-md transition-opacity">
            {isOpen ? "Hide" : "Contact us"}
            {/* Tooltip Arrow */}
            <div className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rotate-45 bg-white"></div>
            </span>
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#4A5DDF] text-white shadow-xl transition-transform hover:scale-105">
            <div
                className={`absolute transition-all duration-300 ${
                isOpen ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"}`}>
                <MessageCircle size={24} />
            </div>
            <div
                className={`absolute transition-all duration-300 ${
                isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"}`}>
                <X size={24} />
            </div>
            </button>
        </div>
        </div>
    );
}