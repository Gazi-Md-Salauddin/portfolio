"use client"
import React from 'react'
import projects from '@/data/projects.json'
import Link from 'next/link';
import { Card, Button } from "@heroui/react";
import Image from "next/image";

const AllProjectsPage = () => {
  return (
    <section id="projects" className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-blue-400 text-center">
          All Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <Card key={project.id} className="bg-white/5 border border-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">

              <div className="flex items-center justify-center rounded-t-lg">
                <Image src={project.image} alt={project.title} width={300} height={300} priority className="w-full object-cover rounded-t-lg"/>
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
      </div>
    </section>
  )
}

export default AllProjectsPage