import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiNodedotjs,
  SiMysql,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";



function Skills() {
   const skills = [
    { name: "Next.js", icon: <SiNextdotjs size={30} />, level: 90 },
    { name: "React", icon: <SiReact size={30} />, level: 85 },
    { name: "TypeScript", icon: <SiTypescript size={30} />, level: 75 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} />, level: 80 },
    { name: "JavaScript", icon: <SiJavascript size={30} />, level: 90 },
    { name: "HTML", icon: <SiHtml5 size={30} />, level: 95 },
    { name: "CSS", icon: <SiCss3 size={30} />, level: 92 },
    { name: "Git", icon: <SiGit size={30} />, level: 85 },
    { name: "Node.js", icon: <SiNodedotjs size={30} />, level: 70 },
    { name: "MySQL", icon: <SiMysql size={30} />, level: 75 },
    { name: "Bootstrap", icon: <SiBootstrap size={30} />, level: 85 },
    { name: "Figma", icon: <SiFigma size={30} />, level: 80 },
  ];

  return (
    <section className="bg-black dark:bg-gray-900 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-400 mt-2"
        >
          The magical tools I use to bring <span className="text-blue-400">ideas to life</span>
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200, delay: i * 0.1 }}
              className="bg-gray-800 dark:bg-gray-800 p-5 rounded-xl shadow-lg flex flex-col items-center"
            >
              <div className="text-blue-400 mb-2">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-3">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills

