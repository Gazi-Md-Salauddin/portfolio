"use client"
import Image from "next/image";
import Html from '@/assets/html-icon.png';
import Css from '@/assets/CSS3.png';
import Tailwind from '@/assets/Tailwind-CSS.png';
import Javascript from '@/assets/js-icon.png';
import React from '@/assets/react-icon.png';
import Nextjs from '@/assets/nextjs-icon.png';
import Betterauth from '@/assets/betterauth.png';
import Mongodb from '@/assets/MongoDB.png';
import Node from '@/assets/node-js.png';
import Express from '@/assets/express.png';
import { motion } from "framer-motion";

const icons = [
    {
        id: 1,
        title: "HTML",
        image: Html
    },
    {
        id: 2,
        title: "CSS",
        image: Css
    },
    {
        id: 3,
        title: "Tailwind",
        image: Tailwind
    },
    {
        id: 4,
        title: "Javascript",
        image: Javascript
    },
    {
        id: 5,
        title: "React",
        image: React
    },
    {
        id: 6,
        title: "Next.js",
        image: Nextjs
    },
    {
        id: 7,
        title: "MongoDB",
        image: Mongodb
    },
    {
        id: 8,
        title: "Better Auth",
        image: Betterauth
    },
    {
        id: 9,
        title: "NodeJs",
        image: Node
    },
    {
        id: 10,
        title: "Expressjs",
        image: Express
    }
];

const About = () => {
    return (
        <section id="about" className="py-18 bg-[#020617] text-white my-16">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
                {/*Left side*/}
                <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">About Me</h2>
                    
                    <p className="text-gray-400 mb-4 text-xl">
                        I am a Mern Stack Developer from Bangladesh. Currently I
                        am building my skills in React, NextJs, JavaScript,
                        Mongodb, Better-auth, Express.js, Node.js and Tailwind
                        css by creating real projects and practicing problem
                        solving. I enjoy learning how websites work and turning
                        ideas into responsive and user-friendly web
                        applications. I am continuously learning new
                        technologies and improve my development skills. In the
                        future, I plan to learn more about advanced web
                        development tools.
                    </p>
                </motion.div>
                {/*Right side*/}
                <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {icons.map(icon => (
                            <div
                                key={icon.id}
                                className="px-4 py-4 bg-blue-500/10 border border-blue-500/20 rounded-lg flex-col justify-center items-center"
                            >
                                <Image
                                    src={icon.image}
                                    width={40}
                                    height={40}
                                    alt={icon.title}
                                />
                                <p className="pt-4">{icon.title}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default About;
