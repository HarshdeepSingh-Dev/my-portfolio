"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Training Portal for a U.S.-Based Cybersecurity Academy",
    challenge: "Fragmented content delivery and limited learner analytics.",
    websiteImage: "/images/web-portal-development/3.svg",
    solution:
      "A secure web portal for learners to register, access live and recorded sessions, complete assessments, and track certifications.",
    impact:
      "Increased course completion rate and simplified enterprise client management.",
    accentColor: "#FB923C",
  },
  {
    title: "Order Management Portal for a Tiffin Meal Service",
    challenge:
      "High order errors and delivery delays due to manual coordination.",
    websiteImage: "/images/web-portal-development/2.svg",
    solution:
      "A user-friendly web portal for placing, managing, and dispatching daily tiffin orders, complete with payment and delivery integration.",
    impact: "2x faster order processing and improved customer retention.",
    accentColor: "#FB923C", // warm orange accent
  },
  {
    title: "Real Estate Automation Portal for a Dubai-Based Company",
    challenge: "Complex coordination between buyers, agents, and legal teams.",
    websiteImage: "/images/web-portal-development/4.svg",
    solution:
      "A fully automated real estate portal—from property browsing and virtual tours to offer management, document signing, and legal workflows.",
    impact:
      "Cut transaction time by 40% and reduced dependency on manual intervention.",
    accentColor: "#FB923C",
  },
];

// Laptop frame image (transparent screen area)
// const laptopFrame = "/images/macbook.png";

const Slider3D = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { title, challenge, solution, impact, websiteImage } =
    slides[activeIndex];

  return (

    <div
      className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[400px] p-6 rounded-lg"
      style={{ background: "#141A1A", minHeight: "90vh" }}
    >
      {/* Left Side */}
      <div className="flex flex-col gap-6 md:w-1/2 md:px-6">
        {/* <div className="flex items-center justify-center w-16 h-16 text-4xl text-gray-700 bg-white rounded-full shadow-md">
                    {icon}
                </div> */}

        <h2 className="text-4xl font-bold text-white">{title}</h2>

        {/* Challenge */}
        <div>
          <h3 className="text-2xl font-semibold text-white">Challenge</h3>
          <p className="text-lg text-gray-200">{challenge}</p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-2xl font-semibold text-white">Solution</h3>
          <p className="text-lg text-gray-200">{solution}</p>
        </div>

        {/* Impact */}
        <div>
          <h3 className="text-2xl font-semibold text-white">Impact</h3>
          <p className="text-lg text-gray-200">{impact}</p>
        </div>

        <button className="self-start px-6 py-3 text-white transition bg-transparent border-2 border-white hover:bg-white hover:!text-black text-[18px] font-bold">
          Learn More
        </button>
      </div>

      {/* Right Side (Image Section) */}
      <div className="relative flex items-center justify-center mt-8 md:w-1/2 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative w-[320px] h-[220px] md:w-[650px] md:h-[500px] lg:w-[800px] lg:h-[600px] overflow-hidden"
          >
            <img
              src={websiteImage}
              alt={`${title} Screenshot`}
              className="absolute top-0 left-0 object-contain w-full h-full overflow-auto"
              draggable={false}
              loading="lazy"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.3s ease",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute flex px-3 text-3xl text-white transition border border-white bottom-6 left-6"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute flex px-3 text-3xl text-white transition border border-white bottom-6 right-6"
        aria-label="Next Slide"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Slider3D;
