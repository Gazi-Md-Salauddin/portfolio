"use client";
import Link from 'next/link'
//import { Github, Linkedin, Facebook, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-[#020617] border-t border-white/10 overflow-hidden">
            {/* TOP GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/10 blur-[120px]" />

            <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">
                {/* TOP AREA */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* LEFT */}
                    <div>
                        <h2 className="text-2xl font-bold text-blue-500">
                            Gazi Md Salauddin
                            <span className="text-white">.</span>
                        </h2>

                        <p className="text-gray-400 mt-3 max-w-sm leading-relaxed">
                            Frontend Developer focused on building modern,
                            responsive and high-performance web experiences.
                        </p>
                    </div>

                    {/* CENTER LINKS */}
                    <div className="flex gap-6 text-sm text-gray-400">
                        <a
                            href="#about"
                            className="hover:text-white transition"
                        >
                            About
                        </a>

                        <a
                            href="#projects"
                            className="hover:text-white transition"
                        >
                            Projects
                        </a>

                        <a
                            href="#skills"
                            className="hover:text-white transition"
                        >
                            Skills
                        </a>

                        <a
                            href="#contact"
                            className="hover:text-white transition"
                        >
                            Contact
                        </a>
                    </div>

                    {/* SOCIALS */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300"
                        >
                            {/*<Github size={18} />*/}
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300"
                        >
                            {/*<Linkedin size={18} />*/}
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300"
                        >
                            {/*<Facebook size={18} />*/}
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300"
                        >
                            {/*<Instagram size={18} />*/}
                        </a>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-10" />


                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        Designed & built by <span className="text-blue-500">Gazi Md Salauddin.</span> &copy; {new Date().getFullYear()}. All rights reserved.
                    </p>

                    {/* BACK TO TOP */}
                    <Link
                        href="#hero"
                        className="w-10 h-10 rounded-full static bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-300"
                    >
                        {/*<ArrowUp size={18} />*/} Top
                    </Link>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
