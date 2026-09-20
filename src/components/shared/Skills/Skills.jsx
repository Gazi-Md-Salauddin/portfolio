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
import { FaCode } from "react-icons/fa6";
import { RxServer } from "react-icons/rx";
import { RiToolsFill } from "react-icons/ri";

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
    <section id="skills" className="max-w-7xl mx-auto py-18 bg-[#020617]">
      <p className="text-md text-blue-400 text-md uppercase text-center mb-4">Skills</p>
      <h2 className="text-5xl font-bold mb-12 px-6 text-center">Modern Technologies & Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">

        {/*Frontend*/}
        <div className="bg-white/5 p-6 rounded-xl border border-white/6 hover:border-cyan-400/30">
          <div className="flex items-center gap-2">
            <div className="bg-white/5 p-2 rounded-xl text-cyan-400">
              <FaCode />
            </div>
            <h2 className="text-2xl font-semibold my-2 px-4">Frontend</h2>
          </div>
          <div className="bg-white/50 mb-4">
          </div>
          <div className="grid grid-cols-2 gap-2 py-4">
            {frontend.map((item) => (
              <div key={item.name} className="flex bg-white/5 border border-white/10 p-2 rounded-xl items-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Image
                  key={item.name}
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                />
                <h3 className="text-[14px] text-slate-300 truncate">{item.name}</h3>

              </div>
            ))}
          </div>
        </div>

        {/*Backend*/}
        <div className="bg-white/5 p-6 rounded-xl border border-white/6 hover:border-emerald-400/30">
          <div className="flex items-center gap-2">
            <div className="bg-white/5 p-2 rounded-xl text-emerald-400">
              <RxServer />
            </div>
            <h2 className="text-2xl font-semibold my-4">Backend</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {backend.map((item) => (
              <div key={item.name} className="flex flex-wrap bg-white/5 border border-white/10 p-2 rounded-xl items-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Image
                  key={item.name}
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                />
                <h3 className="text-[14px] text-slate-300 truncate">{item.name}</h3>
              </div>
            ))}

          </div>
        </div>

        {/*Tools*/}
        <div className="bg-white/5 p-6 rounded-xl border border-white/6 hover:border-amber-400/30 hover:shadow-lg">
          <div className="flex items-center gap-2">
            <div className="bg-white/5 p-2 rounded-xl text-amber-400">
              <RiToolsFill />
            </div>
            <h2 className="text-2xl font-semibold my-4">Tools</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {tools.map((item) => (
              <div key={item.name} className="flex flex-wrap bg-white/5 border border-white/10 p-2 rounded-xl items-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Image
                  key={item.name}
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                />
                <h3 className="text-[14px] text-slate-300 truncate">{item.name}</h3>
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}
export default Skills;