"use client";
import { Button, Card } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link'
import HeroImg from "@/assets/hero-image.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="flex items-center bg-[#020617] text-white mt-26">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid md:grid-cols-2 gap-18 my-8">
                {/* LEFT */}
                <div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 my-2 border border-blue-700 bg-blue-950/30 rounded-full">
                        <span className="animate-pulse w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>

                        <span className="text-blue-400">
                            Available for projects
                        </span>
                    </div>

                    <p className="text-xl my-4 font-semibold">Hey, I'm</p>
                    <h1 className="text-[3rem] font-bold leading-tight ">
                        Gazi Md Salauddin
                        <motion.span
                            className="inline-block"
                            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            style={{

                                transformOrigin: "70% 70%"
                            }}
                        >
                            👋
                        </motion.span>
                    </h1>

                    <div className="flex gap-2 items-center text-white my-4 max-w-md">
                        <p className="text-[1.7em]">I am a {""}</p>
                        <TypeAnimation
                            sequence={[
                                "Frontend Developer",
                                1000,
                                "Backend Developer",
                                1000,
                                "MERN Stack Developer",
                                1000,
                                "Junior Full Stack Developer",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-blue-500"
                            style={{
                                fontSize: "1.3em",
                                display: "inline-block"
                            }}
                            repeat={Infinity}
                        />
                    </div>
                    <p> I build modern, responsive and scalable
                        web applications using React, Next.js,
                        Node.js, Express.js and MongoDB.</p>

                    <div className="flex gap-4 mt-6">
                        <Button color="primary" className="hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"><Link className="flex gap-2 items-center" href="https://drive.google.com/file/d/1Uc4nZ12HNKh8gWF82dx-FpmiZklzPYcH/view?usp=drivesdk"><FaDownload />Download Resume</Link></Button>
                        <Button href="#projects" variant="outline" className="border border-blue-400 text-blue-500 bg-[#020617] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"><Link href="#projects">View Work</Link></Button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center md:justify-end items-center">
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-70 h-70 md:w-75 md:h-75 lg:w-92.5 lg:h-92.5 border-2 border-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                    >
                        <Image
                            src={HeroImg}
                            alt="Hero Image"
                            width="370"
                            height="370"
                            className="w-70 h-70 md:w-75 md:h-75 lg:w-92.5 lg:h-92.5 rounded-full object-cover"
                            
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
