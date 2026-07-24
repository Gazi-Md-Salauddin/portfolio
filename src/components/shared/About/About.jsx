"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImg from "@/assets/hero-image.jpg";
import Graph from '@/assets/graph.png'
import Books from '@/assets/books.png'

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
                        I am a MERN Stack Developer from Bangladesh. Currently I
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
                    <div className="flex flex-col justify-center items-center gap-3">
                    <div className="inline-flex items-center gap-3 px-6 py-2 my-2 border border-green-700 bg-green-950/30 rounded-full">
                        <span className="animate-pulse w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>

                        <span className="text-green-400">
                            Open to work
                        </span>
                    </div>
                        
                    <div className="border-2 border-blue-500 w-40 h-40 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                    >
                        <Image
                            src={HeroImg}
                            alt="Hero Image"
                            className="rounded-full"
                        />
                    </div>
                      <h2 className="text-center font-bold text-xl pt-2">Gazi Md Salauddin</h2>
                      <p className="text-center text-blue-500">MERN Stack Developer</p>
                    </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-4">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl items-center text-center">
                      <span className="font-bold text-xl">15+</span>
                      <p>Projects</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-center items-center text-center">
                      <Image src={Graph} 
                        alt="Graph"
                        width="30"
                        height="30"/>
                      <p className="pt-2">Growth Focus</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-center items-center text-center">
                      <Image src={Books} 
                        alt="Books"
                        width="30"
                        height="30"/>
                      <p className="pt-2">Continuous Learner</p>
                    </div>
                  </div>
                </motion.div>
            </div>
        </section>
    );
};
export default About;
