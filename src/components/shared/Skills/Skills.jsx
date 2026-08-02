"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import CSSIcon from '@/assets/css3.png'
import Express from '@/assets/express.png'
import HTML from '@/assets/html-icon.png'
import Javascript from '@/assets/js-icon.png'
import MongoDB from '@/assets/mongoDB.png'
import NextJs from '@/assets/nextjs-icon.png'
import NodeJs from '@/assets/node-js.png'
import React from '@/assets/reactIcon.png'
import Tailwind from '@/assets/tailwindCss.png'
import BetterAuth from '@/assets/betterauth.png'
import Typescript from '@/assets/typescript.png'
import Figma from '@/assets/figma.png'
import Github from '@/assets/github.png'
import Vercel from '@/assets/vercelIcons.png'
import VsCode from '@/assets/vsCode.png'
import Git from '@/assets/git.png'
import Netlify from '@/assets/netlify.png'

const frontend = [
  { name: "Next.js", icon: NextJs },
  { name: "React", icon: React },
  { name: "TypeScript", icon: Typescript },
  { name: "JavaScript", icon: Javascript },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "CSS", icon: CSSIcon },
  { name: "HTML", icon: HTML },
  { name: "Better Auth", icon: BetterAuth },
];
const backend = [
  { name: "Express.js", icon: Express },
  { name: "Node.js", icon: NodeJs },
  { name: "MongoDB", icon: MongoDB },  
];
const tools = [
  { name: "Git", icon: Git },
  { name: "GitHub", icon: Github },
  { name: "VS Code", icon: VsCode },
  { name: "Figma", icon: Figma },
  { name: "Vercel", icon: Vercel },
  { name: "Netlify", icon: Netlify },
];

const Skills = () => {
 
  
  return (
    <section id="skills" className="py-18 bg-[#0F172A]">
        <h2 className="text-3xl font-bold mb-8 px-6 text-blue-400">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4">
          
             {/*Frontend*/}
      <div className="w-full mx-auto px-2 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-blue-400 my-4 px-4">Frontend</h2>
        {frontend.map((item) => (
          <div key={item.name} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <Image
    key={item.name}
    src={item.icon}
    alt={item.name}
    width={32}
    height={32}
  />
            <h3>{item.name}</h3>
            <div className="w-full bg-white/10 h-2 mt-3 rounded">
              <div className="bg-blue-500 h-2 rounded w-[90%]" />
            </div>
          </div>
        ))}
      </div>
          
           {/*Backend*/}
      <div className="w-full mx-auto px-2 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-blue-400 my-4">Backend</h2>
        {backend.map((item)=>(
          <div key={item.name} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <Image
    key={item.name}
    src={item.icon}
    alt={item.name}
    width={32}
    height={32}
  />
            <h3>{item.name}</h3>
            <div className="w-full bg-white/10 h-2 mt-3 rounded">
              <div className="bg-blue-500 h-2 rounded w-[90%]" />
            </div>
          </div>
        ))}
      </div>
          
           {/*Tools*/}
      <div className="w-full mx-auto px-2 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-blue-400 my-4">Tools</h2>
        {tools.map((item)=>(
          <div key={item.name} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <Image
    key={item.name}
    src={item.icon}
    alt={item.name}
    width={32}
    height={32}
  />
            <h3>{item.name}</h3>
            <div className="w-full bg-white/10 h-2 mt-3 rounded">
              <div className="bg-blue-500 h-2 rounded w-[90%]" />
            </div>
          </div>
        ))}
        
      </div>
        </div>
      
    </section>
  );
}
export default Skills;