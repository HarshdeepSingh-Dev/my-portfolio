"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type steps = {
  title: string;
  description: string;
  image: string;
};

const Experience = ({ steps }: { steps: steps[] }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // animate progress bar
    gsap.to(progressRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // animate airplane
    gsap.to(planeRef.current, {
      y: () =>
        containerRef.current ? containerRef.current.offsetHeight - 40 : 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative py-20 bg-[#141A1A] text-white">
      <h2 className="mb-20 text-4xl font-bold text-center text-white">
        Experience
      </h2>

      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        {/* Vertical progress bar container */}
        <div className="absolute top-0 z-0 w-1 h-full transform -translate-x-1/2 bg-gray-700 left-1/2" />

        {/* Progress bar that fills on scroll */}
        <div
          ref={progressRef}
          className="absolute top-0 z-10 w-1 transform -translate-x-1/2 bg-white left-1/2"
          style={{ height: 0 }}
        />

        {/* Airplane icon flying along the progress bar */}
        <Image
          ref={planeRef}
          height={40}
          width={40}
          src="/images/plane.png"
          alt="Flying airplane"
          className="absolute z-20 rotate-[135deg] -translate-x-1/2 left-1/2"
          style={{ top: 0 }}
        />

        <div className="relative z-20 flex flex-col gap-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex justify-between items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Text content */}
              <div className="w-1/2 px-6 max-w-[500px]">
                <div className="p-6 bg-transparent border shadow-md rounded-xl">
                  <h3 className="mb-2 text-lg md:text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Illustration */}
              <div
                className={`flex w-1/2 px-6 max-w-[300px] `}
              >
                <Image
                width={200}
                height={160}
                  src={step.image}
                  alt={step.title + " illustration"}
                  className={`object-contain max-h-40 filter invert`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
