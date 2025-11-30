import React from "react";
import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";

function projects() {
 const projects = [
    {
      title: "Upskill",
      image: "/Upskill.png",
      featured: true,
      desc: "A multiplayer Pong game with a modern twist using Next.js, TailwindCSS, and Engine.",
      stack: ["React", "TailwindCSS" ],
      link: "https://github.com/erfanullahkhan71-afk/upskill",
    },
    {
      title: "MonksHub",
      image: "/Monks.png",
      featured: true,
      desc: "A modern responsive Todo application built with Next.js, Redux, TypeScript and full CRUD features.",
      stack: ["HTML", "CSS", ],
      link: "https://github.com/erfanullahkhan71-afk/MonksHub",
    },
    {
      title: "Shopper",
      image: "/Shooper.png",
      featured: false,
      desc: "A Docker-based project using WordPress, NGINX, and MariaDB.",
      stack: ["React", "TailwindCSS" ],
      link: "https://github.com/erfanullahkhan71-afk/shopper2.0",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold tracking-wide"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-400 mt-2 text-lg"
        >
          A showcase of my <span className="text-blue-400 font-semibold">creative work</span> and technical expertise
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07, translateY: -6 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 250 }}
              className="group relative bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-blue-500/60 transition duration-300"
            >
              {project.featured && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Featured
                </span>
              )}

              <div className="overflow-hidden h-44">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-300 mt-5 cursor-pointer hover:text-blue-500 transition font-medium group-hover:underline"
                >
                  <FiCode className="text-lg" /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default projects
