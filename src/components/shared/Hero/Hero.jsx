"use client";
import { Button, Card } from "@heroui/react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="flex items-center text-white mt-26">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                {/* LEFT */}
                <div>
                    <div className="inline-flex items-center gap-3 px-6 py-2 my-2 border border-blue-700 bg-blue-950/30 rounded-full">
                        <span className="animate-pulse w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>

                        <span className="text-blue-400 tracking-wide">
                            Available for projects
                        </span>
                    </div>
                    
                    <p className="my-4">Hey, I'm</p>
                    <h1 className="text-5xl font-bold leading-tight">
                        Gazi Md Salauddin
                    </h1>

                    <p className="text-white mt-4 max-w-md">
                        I am a Frontend developer 
                    </p>

                    <div className="flex gap-4 mt-6">
                        <Button color="primary">Hire Me</Button>
                        <Button variant="bordered">View Work</Button>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
                        <div className="text-5xl mb-4">🧑‍💻</div>

                        <h3 className="text-lg font-bold">Gazi Md Salauddin</h3>
                        <p className="text-blue-400 text-sm">
                            Frontend Developer
                        </p>

                        <div className="grid grid-cols-3 gap-3 mt-5 text-sm">
                            <div>
                                <p className="text-blue-500 font-bold">5+</p>
                                <p className="text-gray-400">Years</p>
                            </div>
                            <div>
                                <p className="text-blue-500 font-bold">40+</p>
                                <p className="text-gray-400">Projects</p>
                            </div>
                            <div>
                                <p className="text-blue-500 font-bold">98%</p>
                                <p className="text-gray-400">Success</p>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
