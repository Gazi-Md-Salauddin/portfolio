"use client";
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative bg-[#020617] border-t border-white/10 overflow-hidden">
            {/* TOP GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/10 blur-[120px]" />

            <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">
                {/* TOP AREA */}
                <div className="md:flex items-center justify-between gap-10">
                    {/* LEFT */}
                    <div className="flex flex-col justify-start">
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
                    <div className="md:text-center">
                      <h2 className="text-2xl font-semibold text-blue-400 my-6">Important Links</h2>
                    <div className="flex gap-4 text-sm text-gray-400">
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
                    </div>

                    {/* SOCIALS */}
                    <div className="md:px-4 md:text-center">
                      <h2 className="text-2xl font-semibold text-blue-400 my-6">Social Links</h2>
                      <div className="flex items-center gap-3">
                        <Link
                            href="https://github.com/Gazi-Md-Salauddin"
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300"
                        >
                            <FaGithub size={18} />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/gazi-md-salauddin"
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300"
                        >
                            <FaLinkedin size={18} />
                        </Link>

                        <Link
                            href="https://www.facebook.com/share/1DBYxbEnu4/"
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300"
                        >
                            <FaFacebook size={18} />
                        </Link>
                        
                      </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-10" />

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        Designed & built by <span className="text-blue-500">Gazi Md Salauddin.</span> &copy; {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
