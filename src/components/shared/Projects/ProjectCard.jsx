"use client"
import { Card, Button } from "@heroui/react";
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const projects = [
  {
    id: 1,
    title: "Travelo",
    subtitle: "Online ticket booking platform",
    image: "/images/travelo.jpg",
    description: "Travelo is a full-stack online ticket booking platform that allows users to search, book, and manage travel tickets with ease. It features secure authentication, responsive design, real-time booking management, and a modern user interface. The project was built to practice full-stack development using Next.js, Express.js, MongoDB, and BetterAuth while focusing on performance, scalability, and user experience.",
    live: "https://travelo-dun-two.vercel.app",
    code: "https://github.com/Gazi-Md-Salauddin/travelo",
    technologies: ["Next.js", "Express.js", "Node.js", "JavaScript", "MongoDB", "BetterAuth", "HeroUI", "Tailwind"]
  },
  {
    id: 2,
    title: "Pethaven",
    subtitle: "Pet adoption platform",
    image: "/images/pethaven.jpg",
    description: "PetHaven is a full-stack pet adoption platform designed to connect pet owners with potential adopters. Users can browse available pets, submit adoption requests, and manage their own listings. The platform includes secure authentication, role-based features, and a responsive interface. This project helped me strengthen my skills in Next.js, Express.js, MongoDB, BetterAuth, and building real-world CRUD applications.",
    live: "https://pethaven-woad.vercel.app",
    code: "https://github.com/Gazi-Md-Salauddin/pethaven",
    technologies: ["Next.js", "Express.js","Node.js", "MongoDB", "Javascript","BetterAuth", "JWT", "HeroUI", "Tailwind"]
  },
  {
    id: 3,
    title: "DigiTools-Platform",
    subtitle: "Buying digital tools",
    image: "/images/digitools.jpg",
    description: "DigiTools Platform is a digital marketplace where users can explore and purchase various digital tools and resources. The project focuses on creating a clean, responsive, and user-friendly shopping experience. It was developed to improve my frontend development skills using JavaScript, Tailwind CSS, and DaisyUI while practicing modern UI design principles.",
    live: "https://digitools-platform1.netlify.app",
    code: "https://github.com/Gazi-Md-Salauddin/digiTools-Platform",
    technologies: ["Next.js", "JavaScript", "DaisyUI", "Tailwind"]
  }
];


const ProjectCard = () => {
  
  return (
    <section id="projects" className="py-18 bg-[#0F172A] text-white">
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
                {project.subtitle}
              </p>

              <div className="flex gap-2 mt-4">
                <Link href={`/all-projects/${project.id}`} className="bg-blue-500 rounded-lg py-2 px-2">View Details</Link>
                
                
              </div>

            </Card>
          ))}

        </div>
        
        <div className="pt-8 text-center">     
        <Link href="/all-projects" className="text-blue-500 w-full border border-blue-500 text-center p-2">View All Projects</Link>
        </div>
        
      </motion.div>
    </section>
  );
};
export default ProjectCard;