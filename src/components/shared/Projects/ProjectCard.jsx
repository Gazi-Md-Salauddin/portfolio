"use client"
import { Card, Button } from "@heroui/react";
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SkillSphere from '@/assets/skillsphere.jpg';
import KeenKeeper from '@/assets/keenkeeper.jpg';
import Digitools from '@/assets/digitools.jpg';

const projects = [
  {
    id: 1,
    title: "DigiTools-Platform",
    description: "Buying digital tools",
    image: Digitools,
    live: "https://digitools-platform1.netlify.app",
    code: "https://github.com/Gazi-Md-Salauddin/digiTools-Platform",
    technologies: ["Tailwind", "DaisyUI", "Javascript", "NextJs"]
  },
  {
    id: 2,
    title: "SkillSphere",
    description: "Online learning platform",
    image: SkillSphere,
    live: "https://skill-sphere-virid.vercel.app",
    code: "https://github.com/Gazi-Md-Salauddin/skill-sphere",
    technologies: ["Tailwind", "Javascript", "NextJs", "Mongodb", "BetterAuth"]
  },
  {
    id: 3,
    title: "KeenKeeper",
    description: "Keep your friendship alive",
    image: KeenKeeper,
    live: "https://keen-keeper-rouge-psi.vercel.app",
    code: "https://github.com/Gazi-Md-Salauddin/keen-keeper",
    technologies: ["Tailwind", "DaisyUI", "Javascript", "React"]
  },
];


const ProjectCard = () => {
  
  return (
    <section id="projects" className="py-24 bg-[#0F172A] text-white">
      <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }} className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-blue-400">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <Card key={project.id} className="bg-white/5 border border-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">

              <div className="flex items-center justify-center rounded-t-lg">
                <Image src={project.image} alt={project.title} width={300} height={300} className="w-full object-cover rounded-t-lg"/>
              </div>
              <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => 
              <p className="bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm p-2 text-blue-500" key={index}>{tech}</p>
              )}
              </div>
              <h3 className="mt-4 font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.description}
              </p>

              <div className="flex gap-2 mt-4">
                <Link href={project.live} className="bg-blue-500 rounded-lg py-2 px-2">Live Demo</Link>
                <Link href={project.code} className="outline-1 outline-blue-500 py-2 px-3 rounded-lg">Code</Link>
              </div>

            </Card>
          ))}

        </div>
      </motion.div>
    </section>
  );
};
export default ProjectCard;