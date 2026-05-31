"use client"
import { motion } from "framer-motion";

const frontend = ["HTML","CSS","Tailwind","Javascript","React","Next.js", "Better Auth", "JWT"]
const backend = ["MongoDB", "NodeJs", "ExpressJs"]
const tools = ["Vs code", "Git", "GitHub", "Figma"]

const Skills = () => {
  
  return (
    <motion.section id="skills" initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }} className="py-24 bg-[#0F172A]">
        <h2 className="text-3xl font-bold mb-10 px-6 text-blue-400">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4">
          
             {/*Frontend*/}
      <div className="w-full mx-auto px-2 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-blue-400 my-4 px-4">Frontend</h2>
        {frontend.map(f=>(
          <div key={f} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <h3>{f}</h3>
            <div className="w-full bg-white/10 h-2 mt-3 rounded">
              <div className="bg-blue-500 h-2 rounded w-[90%]" />
            </div>
          </div>
        ))}

      </div>
           {/*Backend*/}
      <div className="w-full mx-auto px-2 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-blue-400 my-4">Backend</h2>
        {backend.map(b=>(
          <div key={b} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <h3>{b}</h3>
            <div className="w-full bg-white/10 h-2 mt-3 rounded">
              <div className="bg-blue-500 h-2 rounded w-[90%]" />
            </div>
          </div>
        ))}

      </div>
           {/*Tools*/}
      <div className="w-full mx-auto px-2 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-blue-400 my-4">Tools</h2>
        {tools.map(t=>(
          <div key={t} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <h3>{t}</h3>
            <div className="w-full bg-white/10 h-2 mt-3 rounded">
              <div className="bg-blue-500 h-2 rounded w-[90%]" />
            </div>
          </div>
        ))}

      </div>
        </div>
      
    </motion.section>
  );
}
export default Skills;