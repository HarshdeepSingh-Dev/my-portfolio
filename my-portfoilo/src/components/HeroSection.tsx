'use client'
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
     <section
        id="home"
        className="min-h-screen contain-content flex flex-col gap-6 md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-gradient-to-r from-blue-900 to-teal-700 text-white"
      >
        {/* Left: Text */}
        <div className="text-center md:text-left md:w-1/2 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-cyan-200">Harsh👋</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            <Typewriter
              words={[
                "A passionate Full Stack Developer",
                "building modern web applications.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <Link
            href="#projects"
            className="inline-block bg-cyan-500 hover:bg-teal-400 text-white text-[19px] py-2 px-5 rounded-lg transition"
          >
            View Projects
          </Link>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center border-4 border-white h-[300px] w-[300px] overflow-hidden rounded-full shadow-lg">
          <Image
            src="/Harshdeep.jpg"
            alt="Harsh's Photo"
            width={300}
            height={300}
            // className="rounded-full shadow-lg border-4 border-indigo-500"
          />
        </div>
      </section>
  );
}

export default HeroSection;