"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection2 = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/portfolio-hero.jpg')" }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}

      {/* Content */}
      <div className="relative z-10 w-full mx-auto flex flex-col-reverse md:flex-row items-start justify-between gap-10">
        <div className="w-full text-center md:text-left space-y-6">
          <motion.h1
            className="text-4xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I’m Harsh...
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Typewriter
              words={[
                "A passionate Full Stack Developer",
                "building modern web applications.",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.p>

          <motion.a
            href="#projects"
            className="inline-block mt-4 px-6 py-2 bg-transparent border border-white text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
