import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


function Hero() {
  // Scroll function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black dark:bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <TypeAnimation
              sequence={["Erfanullah", 1500, "Erfanullah Rahmatzai", 1500]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block", color: "#38bdf8" }}
            />
          </h1>
          <motion.p
            className="mt-4 text-gray-300 text-2xl md:text-3xl max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I’m a 15 years old{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">
              Frontend Developer
            </span>
          </motion.p>
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {/* Hire Me Button */}
            <button
              onClick={() => handleScroll("footer")}
              className="bg-blue-500 hover:bg-blue-600 rounded-xl px-4 py-2 text-white"
            >
              Hire Me
            </button>

            {/* Download CV Button */}
            <a href="/Erfanullahpdf.pdf" download="Erfanullah-CV">
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-xl transition shadow-md">
                Download CV
              </button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0 relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
          <motion.img
            src="/erfan.png"
            alt="Erfanullah Rahmatzai"
            className="w-[330px] md:w-[450px] lg:w-[500px] relative rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero
