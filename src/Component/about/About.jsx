import React from "react";
import { motion } from "framer-motion";



function About() {
  return (
    <div>
      <section className="bg-black dark:bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-xl"></div>
         <img
  src="/erfan.png"
  alt="Profile"
  className="relative w-64 h-64 object-cover rounded-2xl shadow-xl"
/>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-5">
            I’m a passionate{" "}
            <span className="text-blue-400 font-semibold">Frontend Developer</span>{" "}
            who loves creating responsive, user-friendly, and visually appealing
            digital experiences. I specialize in modern web technologies like{" "}
            <span className="text-blue-300">HTML, CSS, JavaScript, React</span>{" "}
            and <span className="text-blue-300">Tailwind CSS</span>.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I enjoy turning creative ideas into clean, functional web interfaces. My
            focus is on writing maintainable code, improving UI/UX, and delivering
            smooth, high-quality experiences for users.
          </p>
       
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default About
