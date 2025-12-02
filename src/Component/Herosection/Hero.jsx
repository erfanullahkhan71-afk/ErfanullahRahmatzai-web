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
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-white">
            <TypeAnimation
              sequence={["Erfanullah", 1800, "Erfanullah Rahmatzai", 1800]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-sky-400"
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
       
        <div className="relative group">
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 opacity-40 blur-xl"></div>
<img
  src="/ERK.jpg"
  alt="Erfanullah Rahmatzai"
  className="
    relative z-10
    w-[330px] md:w-[450px] lg:w-[500px]
    h-[400px] object-cover
    rounded-3xl
    shadow-[0_0_40px_rgba(255,255,255,0.15)]
    border border-white/20
    transition-all duration-500
    hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]
    backdrop-blur-xl
    bg-white/5
  "
/>

</div>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
