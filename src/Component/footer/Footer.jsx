import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";



function Footer() {
  const icons = [
    { icon: <FaLinkedin size={28} />, link: "https://www.linkedin.com/feed/" },
    { icon: <FaGithub size={28} />, link: "https://github.com/" },

    {
      icon: <FaWhatsapp size={28} />,
      link: "https://wa.me/93748948465?text=Hello%20Erfanullah!%20I%20saw%20your%20website%20and%20would%20like%20to%20connect.",
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 flex flex-col items-center gap-12">
      
      {/* Social Icons */}
      <div className="flex items-center gap-8 flex-wrap justify-center">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            className="relative group"
            whileHover={{ scale: 1.15 }}
          >
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition duration-300"></div>

            {/* Icon Container */}
            <div className="relative bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg group-hover:border-blue-400 transition">
              {item.icon}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-10/12 border-t border-gray-700/40"></div>

      {/* Name */}
      <motion.p
        className="text-center text-lg text-gray-300 tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} — Developed by{" "}
        <span className="text-blue-400 font-semibold">Erfanullah Rahmatzai</span>
      </motion.p>
    </footer>
  );
}

export default Footer

