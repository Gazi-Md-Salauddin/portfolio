"use client";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institute: "Shachindra College",
      year: "2022 - 2023",
      description:
        "Completed higher secondary education with a science background.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Headway Model School",
      year: "2020 - 2021",
      description:
        "Completed secondary education with a science background.",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-[#0B1220] text-white"
    >
      <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }} className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="mb-14">
          <p className="text-blue-400 text-3xl font-bold mb-3">
            Education
          </p>

          
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-blue-500/20 ml-4 space-y-10">

          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative pl-10"
            >
              {/* DOT */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]" />

              {/* CARD */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 mr-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                

                {/* YEAR */}
                <span className="text-sm text-blue-400 p-2 font-medium bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  {item.year}
                </span>

                {/* DEGREE */}
                <h3 className="text-2xl font-semibold mt-2">
                  {item.degree}
                </h3>

                {/* INSTITUTE */}
                <p className="text-blue-300 mt-1">
                  {item.institute}
                </p>

                {/* DESCRIPTION */}
                <p className="text-gray-400 mt-4 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}
export default Education