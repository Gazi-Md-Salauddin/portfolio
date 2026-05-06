"use client";
import { Button, Card } from "@heroui/react";
import { motion } from "framer-motion";
import Image from 'next/image';
import HeroImg from '@/assets/hero-image.jpg'

const Hero = () => {
    return (
        <section className="flex items-center text-white mt-26 mx-6">
            <div className="w-full mx-auto grid md:grid-cols-2 gap-18">
                {/* LEFT */}
                <div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 my-2 border border-blue-700 bg-blue-950/30 rounded-full">
                        <span className="animate-pulse w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>

                        <span className="text-blue-400 tracking-wide">
                            Available for projects
                        </span>
                    </div>

                    <p className="my-4 font-semibold">Hey, I'm</p>
                    <h1 className="text-[2.7rem] font-bold leading-tight flex">
                        Gazi Md Salauddin👋
                    </h1>

                    <p className="text-white mt-4 max-w-md">
                        I am a Mern Stack developer
                    </p>

                    <div className="flex gap-4 mt-6">
                        <Button color="primary">Hire Me</Button>
                        <Button color="primary" variant="bordered">
                            View Work
                        </Button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center items-center">
                    <div className="border-2 border-blue-500 w-70 h-70 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]">
                        <Image src={HeroImg} alt="Hero Image" className="rounded-full"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
