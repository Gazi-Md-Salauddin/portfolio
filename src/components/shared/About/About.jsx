import Image from 'next/image'

const icons = [
  {
    id: 1,
    title: "HTML",
    image: "/assets/html-icon.png",
  },
  {
    id: 2,
    title: "CSS",
    image: "/assets/html-icon.png",
  },
  {
    id: 3,
    title: "Tailwind",
    image: "/assets/html-icon.png",
  },
  {
    id: 4,
    title: "Javascript",
    image: "/assets/js-icon.png",
  },
  {
    id: 5,
    title: "React",
    image: "/assets/react-icon.png",
  },
  {
    id: 6,
    title: "Next.js",
    image: "/assets/html-icon.png",
  },
  {
    id: 7,
    title: "MongoDB",
    image: "/assets/html-icon.png",
  },
  {
    id: 8,
    title: "Better Auth",
    image: "/assets/html-icon.png",
  },
  {
    id: 9,
    title: "NodeJs",
    image: "/assets/html-icon.png",
  },
  {
    id: 10,
    title: "Expressjs",
    image: "/assets/express-js.png",
  },
 ]

const About = () => {
  return (
    <section id="about" className="py-18 bg-[#020617] text-white my-16">
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
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          
          {icons.map(icon => (
            <span
              key={icon.id}
              className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg"
            >
              <Image src={icon.image} width={30} height={30} alt={icon.title}/>
              {icon.title}
            </span>
          ))}
        </div>
        </div>

      </div>
    </section>
  );
};
export default About;
