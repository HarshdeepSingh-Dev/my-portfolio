'use client';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0D1111] text-white py-8 px-6">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <p className="text-gray-400 md:text-md text-center md:text-left">
          © {new Date().getFullYear()} Harshdeep Singh. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/harshdeep-singh-5381ba328/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/HarshdeepSingh-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1DA1F2] transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://twitter.com/HarshSingh2912"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1DA1F2] transition"
          >
            <FaTwitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}