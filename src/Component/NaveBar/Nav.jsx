import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../footer/Footer";



function Nav() {
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skill", id: "skills" },
    { name: "Project", id: "projects" },
  ];

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setOpenMenu(false);
  };

  return (
    <header className="bg-black dark:bg-gray-900 px-6 py-3 shadow-md fixed w-full z-50">
      <div className="flex items-center justify-between">
      <img
    src="/logo.jpg"
    alt="Erfanullah Logo"
    className="w-40 object-contain drop-shadow-lg"
    draggable="false"
  />
        <nav className="hidden md:block">
          <ul className="flex text-white dark:text-gray-200 gap-10">
            {links.map((link) => (
              <motion.li
                key={link.id}
                className="cursor-pointer hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                onClick={() => handleScroll(link.id)}
              >
                {link.name}
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className=" items-center gap-4">
       

       <button
  onClick={() => handleScroll("footer")}
  className="bg-blue-500 hover:bg-blue-600 rounded-xl px-4 py-2 text-white hidden md:block"
>
  Contact
</button>


          <button
            className="md:hidden text-white"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-gray-800 text-white dark:bg-gray-700 rounded-xl p-4 space-y-4"
          >
            {links.map((link) => (
              <motion.p
                key={link.id}
                className="cursor-pointer hover:text-blue-400"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleScroll(link.id)}
              >
                {link.name}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Nav

