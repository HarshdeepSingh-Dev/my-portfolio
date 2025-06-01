const About = () => {
  return (
    <section id="about" className="bg-[#141A1A] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-8 text-gray-300">
         Full stack developer who blends solid backend logic with intuitive
          frontend experiences. I love transforming ideas into digital solutions
          that are fast, secure, and easy to use. My focus is always on clean
          code, scalable architecture, and engaging interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            "Next.js",
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Firebase",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-transparent border text-white px-4 py-2 rounded-full text-md font-medium shadow hover:text-black hover:bg-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
