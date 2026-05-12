"use client"
import { Card, Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from '@/assets/js-icon.png'

const projects = [
  {
    id: 1,
    title: "SkillSphere",
    description: "Online learning platform",
    image: Icon,
  },
  {
    id: 2,
    title: "Keen keeper",
    description: "Freindship",
    image: Icon,
  },
  {
    id: 3,
    title: "TaskFlow",
    description: "Productivity management app",
    image: Icon,
  },
];


const ProjectCard = () => {
  
  
  return (
    <section id="projects" className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <Card key={project.id} className="bg-white/5 border border-white/10 p-4">

              <div className="h-40 bg-blue-900 flex items-center justify-center text-3xl">
                <Image src={project.image} alt={project.title} width={300} height={400} className="object-cover"/>
              </div>

              <h3 className="mt-4 font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.description}
              </p>

              <div className="flex gap-2 mt-4">
                <Button size="sm" color="primary">Live Demo</Button>
                <Button size="sm" variant="bordered">Code</Button>
              </div>

            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};
export default ProjectCard;