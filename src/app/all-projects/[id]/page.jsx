import projects from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <section className="py-24 bg-[#0F172A] text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={600}
          className="w-full rounded-xl"
        />

        <h1 className="text-4xl font-bold mt-6">
          {project.title}
        </h1>

        <p className="text-blue-400 mt-2">
          {project.subtitle}
        </p>

        <p className="text-gray-300 mt-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500/20 px-3 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <Link
            href={project.live}
            className="bg-blue-500 px-5 py-2 rounded-lg"
          >
            Live Demo
          </Link>

          <Link
            href={project.code}
            className="border border-blue-500 px-5 py-2 rounded-lg"
          >
            GitHub
          </Link>
        </div>

      </div>
    </section>
  );
}