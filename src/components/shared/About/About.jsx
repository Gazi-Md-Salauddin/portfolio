

const About = () => {
  return (
    <section className="py-24 bg-[#020617] text-white my-6">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/*Left side*/}
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-gray-400 mb-4">
            I’m a frontend developer with passion for design + performance.
          </p>

          <p className="text-gray-400">
            I build modern UI with React, Next.js and animations.
          </p>
        </div>
        {/*Right side*/}
        <div className="flex flex-wrap gap-3 bg-white/5 border border-white/10 p-6 rounded-xl">
          {["HTML","CSS","Tailwind","React","Next.js","Javascript","MongoDB","Node.js","Express.js"].map(skill => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
export default About;
