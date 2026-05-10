"use client";
import { Button } from "@heroui/react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-6xl mx-auto flex justify-between items-center h-[72px] px-6">
                <h1 className="text-xl font-bold text-white">
                    Gazi Md Salauddin<span className="text-blue-500">.</span>
                </h1>

                <div className="hidden md:flex gap-6 text-sm text-gray-400">
                    <a href="#about" className="hover:text-white">
                        About
                    </a>
                    <a href="#projects" className="hover:text-white">
                        Projects
                    </a>
                    <a href="#skills" className="hover:text-white">
                        Skills
                    </a>
                </div>

                <button
                    className="md:hidden text-slate-300 text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
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
                className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 space-y-4 pb-4`}
            >
              {navLinks.map((navItem) => (
              
                <Link key={navItem.href} href={navItem.href} className="block hover:bg-blue-700 px-2 py-1">
                    {navItem.name}
                </Link>
              ))}
                
            </div>
            
        </nav>
    );
};
export default Navbar;
