"use client";
import { Button } from "@heroui/react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/10">
            <div className="container mx-auto flex justify-between items-center h-18 px-6">
                <h1 className="text-xl font-bold text-blue-500">
                    Gazi Md Salauddin<span className="text-white">.</span>
                </h1>

                <div className="hidden md:flex gap-6 text-sm text-gray-400">
                    {navLinks.map((navItem) => (

                        <Link key={navItem.href}
                            href={navItem.href}
                            onClick={() => {
                                setActiveLink(navItem.name);
                                setIsOpen(false);
                            }} className={`block hover:text-blue-700 px-2 py-1 ${activeLink === navItem.name
                                ? "text-blue-500 border-b-2 border-blue-500"
                                : "text-gray-400 hover:text-blue-400"
                                }`}>
                            {navItem.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu bar */}

                <button
                    className="md:hidden text-slate-300 text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-90" : "rotate-0"
        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>
            <div
                className={`${
                    isOpen ? 
                    "block" : 
                    "hidden"} md:hidden mt-4 space-y-4 pb-4`}
            >
                {navLinks.map((navItem) => (

                    <Link key={navItem.href}
                        href={navItem.href}
                        onClick={() => {
                            setActiveLink(navItem.name);
                            setIsOpen(false);
                        }} className={`block hover:bg-blue-600 px-2 py-1 ${activeLink === navItem.name
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : "text-gray-400 hover:text-white transition-all"
                            }`}>
                        {navItem.name}
                    </Link>
                ))}

            </div>

        </nav>
    );
};
export default Navbar;
