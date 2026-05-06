"use client"
import { Card, Button } from "@heroui/react";


const Projects = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1,2,3].map((item) => (
            <Card key={item} className="bg-white/5 border border-white/10 p-4">

              <div className="h-40 bg-blue-900 flex items-center justify-center text-3xl">
                🚀
              </div>

              <h3 className="mt-4 font-bold">
                SaaS Dashboard
              </h3>

              <p className="text-gray-400 text-sm">
                Real-time analytics dashboard UI
              </p>

              <div className="flex gap-2 mt-4">
                <Button size="sm" color="primary">Live</Button>
                <Button size="sm" variant="bordered">Code</Button>
              </div>

            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};
export default Projects;