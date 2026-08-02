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
        <section className="flex items-center text-white mt-26 mx-6">
            <div className="w-full mx-auto grid md:grid-cols-2 gap-18">
                {/* LEFT */}
                <div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 my-2 border border-blue-700 bg-blue-950/30 rounded-full">
                        <span className="animate-pulse w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>

                        <span className="text-blue-400">
                            Available for projects
                        </span>
                    </div>

                    <p className="my-4 font-semibold">Hey, I'm</p>
                    <h1 className="text-[2.7rem] font-bold leading-tight ">
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

                    <div className="flex gap-2 items-center text-white mt-4 max-w-md">
                        <p className="text-[1.3em]">I am a {""}</p>
                        <TypeAnimation
                            sequence={[
                                "Frontend Developer",
                                1000,
                                "MERN Stack Developer",
                                1000,
                                "Web Developer",
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

                    <div className="flex gap-4 mt-6">
                        <Button color="primary" className="hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"><Link className="flex gap-2 items-center" href="https://drive.google.com/file/d/1Uc4nZ12HNKh8gWF82dx-FpmiZklzPYcH/view?usp=drivesdk"><FaDownload/>Download Resume</Link></Button>
                        <Button href="#projects" variant="outline" className="border border-blue-400 text-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"><Link href="#projects">View Work</Link></Button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center items-center">
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="border-2 border-blue-500 w-70 h-70 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                    >
                        <Image
                            src={HeroImg}
                            alt="Hero Image"
                            className="rounded-full"
                          priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
