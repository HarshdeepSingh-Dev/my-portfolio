import HeroSection2 from "@/components/HeroSection2";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactSection from "@/components/Contact";
import Experience from "@/components/Experience";

const steps = [
  {
    title: "Graduated in Computer Science",
    description: "Completed my BCA from GJU in 2022, where I built a strong foundation in software development and algorithms.",
    image: "/images/experience/education.png",
  },
  {
    title: "Full Stack Web Development Bootcamp",
    description: "Enrolled in Coding Ninjas' Full Stack Web Development Bootcamp in 2023, mastering technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
    image: "/images/experience/laptop.png",
  },
  {
    title: "React Developer Intern at Coding Ninjas",
    description: "Started my professional journey with a 3-month internship at Coding Ninjas as a React Developer, contributing to UI development and interactive components.",
    image: "/images/experience/react.png",
  },
  {
    title: "MERN Stack Intern at Webpaint Technologies",
    description: "Worked as a MERN Stack Developer Intern for 3 months in Mohali at Webpaint Technologies, gaining hands-on experience with real-world projects and client work.",
    image: "/images/experience/workplace.png",
  },
  {
    title: "Full Stack Developer at Devoptiv",
    description: "Currently working as a Full Stack Developer at Devoptiv, where I’m involved in building scalable, production-ready applications using the MERN stack.",
    image: "/images/experience/full-stack-developer.png",
  },
];


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div id="home">
        <HeroSection2 />
      </div>
      {/* Placeholder for other sections */}
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience steps={steps} />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
