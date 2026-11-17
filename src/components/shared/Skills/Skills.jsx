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
import Zod from '@/assets/zod.png';
import Mongoose from '@/assets/mongoose.png';
import Antigravity from '@/assets/antigravity.png';
import Api from '@/assets/api-connections.png';
import Claude from '@/assets/claude.png';
import Cursor from '@/assets/cursor.png';
import Jwt from '@/assets/jwt.png';
import Nodemailer from '@/assets/nodemailer.png';
import Lock from '@/assets/lock.png';
import Prompt from '@/assets/prompt.png';
import { FaCode } from "react-icons/fa6";
import { RxServer } from "react-icons/rx";
import { RiToolsFill } from "react-icons/ri";
import { IoSparklesOutline } from "react-icons/io5";

const frontend = [
  { name: "Next.js", icon: NextJs },
  { name: "React", icon: React },
  { name: "TypeScript", icon: Typescript },
  { name: "JavaScript", icon: Javascript },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "CSS", icon: CSSIcon },
  { name: "HTML", icon: HTML },
];
const backend = [
  { name: "Express.js", icon: Express },
  { name: "Node.js", icon: NodeJs },
  { name: "MongoDB", icon: MongoDB },
  { name: "Mongoose", icon: Mongoose },
  { name: "Better Auth", icon: BetterAuth },
  { name: "JWT", icon: Jwt },
  { name: "Zod", icon: Zod },
  { name: "Nodemailer", icon: Nodemailer },
];
const tools = [
  { name: "Git", icon: Git },
  { name: "GitHub", icon: Github },
  { name: "VS Code", icon: VsCode },
  { name: "Figma", icon: Figma },
  { name: "Vercel", icon: Vercel },
  { name: "Netlify", icon: Netlify },
];
const ai = [
  { name: "Cursor", icon: Cursor },
  { name: "Claude", icon: Claude },
  { name: "Rest API Integration", icon: Api },
  { name: "Antigravity", icon: Antigravity },
  { name: "Prompt Engineering", icon: Prompt },
  { name: "Authentication", icon: Lock },
];

const Skills = () => {


  return (
    <section id="skills" className="container mx-auto py-18 bg-[#020617]">
      <div className="text-center mb-12">
      <p className="text-blue-400 text-sm lg:text-xl uppercase mb-4">Skills</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Modern Technologies & Tools</h2>
      <p className=" max-w-xl mx-auto text-gray-400 py-6 px-4">I work with modern technologies and tools to build responsive, scalable, and user-friendly web applications.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6">

        {/*Frontend*/}
        <div className="bg-white/5 p-6 rounded-xl border border-white/6 hover:border-cyan-400/30">
          <div className="flex items-center gap-2">
            <div className="bg-white/5 p-2 rounded-xl text-cyan-400">
              <FaCode />
            </div>
            <h2 className="text-2xl font-semibold my-2 px-4">Frontend</h2>
          </div>
          <div className="border-b-2 border-white/5 mb-4">
          </div>
          <div className="grid grid-cols-2 gap-2 py-4">
            {frontend.map((item) => (
              <div key={item.name} className="flex min-w-0 bg-white/5 border border-white/10 p-2 rounded-xl items-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                  className="shrink-0"
                />
                <p className="text-[14px] text-slate-300 truncate">{item.name}</p>

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
          <div className="border-b-2 border-white/5 mb-4">
          </div>
          <div className="grid grid-cols-2 gap-2">
            {backend.map((item) => (
              <div key={item.name} className="min-w-0 flex bg-white/5 border border-white/10 p-2 rounded-xl items-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                  className="shrink-0"
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
          <div className="border-b-2 border-white/5 mb-4">
          </div>
          <div className="grid grid-cols-2 gap-2">
            {tools.map((item) => (
              <div key={item.name} className="min-w-0 flex bg-white/5 border border-white/10 p-2 rounded-xl items-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                  className="shrink-0"
                />
                <p className="text-[14px] text-slate-300 truncate">{item.name}</p>
              </div>
            ))}

          </div>

        </div>

        {/* AI & Technologies */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/6 hover:border-violet-400/30 hover:shadow-lg">
          <div className="flex items-center gap-2">
            <div className="bg-white/5 p-2 rounded-xl text-violet-400">
              <IoSparklesOutline />
            </div>
            <h2 className="text-2xl font-semibold my-4">AI & Technologies</h2>
          </div>
          <div className="border-b-2 border-white/5 mb-4">
          </div>
          <div className="grid grid-cols-2 gap-2">
            {ai.map((item) => (
              <div key={item.name} className="min-w-0 flex bg-white/5 border border-white/10 p-2 rounded-xl items-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                  className="shrink-0"
                />
                <p className="text-[14px] text-slate-300 truncate">{item.name}</p>
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}
export default Skills;