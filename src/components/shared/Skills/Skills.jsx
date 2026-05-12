const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0F172A]">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {["HTML","CSS","Tailwind","Javascript","React","Next.js","MongoDB","Better Auth","NodeJs","Express"].map(s=>(
          <div key={s} className="glass p-6 rounded-xl">
            <h3>{s}</h3>
            <div className="w-full bg-white/10 h-2 mt-3 rounded">
              <div className="bg-blue-500 h-2 rounded w-[90%]" />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
export default Skills;