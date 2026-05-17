"use client"
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section id="skills" initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }} className="py-24 bg-[#0F172A]">
        <h2 className="text-3xl font-bold mb-10 px-6 text-blue-400">Skills</h2>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {["HTML","CSS","Tailwind","Javascript","React","Next.js","MongoDB","Better Auth","NodeJs","Express"].map(s=>(
          <div key={s} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <h3>{s}</h3>
            <div className="w-full bg-white/10 h-2 mt-3 rounded">
              <div className="bg-blue-500 h-2 rounded w-[90%]" />
            </div>
          </div>
        ))}

      </div>
    </motion.section>
  );
}
export default Skills;