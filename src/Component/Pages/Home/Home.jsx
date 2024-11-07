import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div
      style={{ overflow: "hidden", height: "100vh", background: "linear-gradient(to bottom, #0a192f, #112240)" }}
      className="relative"
    >
      <div className="flex flex-col justify-center items-center min-h-screen text-center text-[#48cae4]">
        
        {/* Heading with typewriter effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Hello, I am{" "}
          <span className="font-extrabold text-[#ffb703]">
            <Typewriter
              options={{
                strings: ["Aeon Roamer.", "a Web Developer.", "an Innovator."],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-lg sm:text-xl max-w-2xl mb-6 px-4 sm:px-6">
          I specialize in crafting beautiful web experiences that focus on
          functionality, design, and innovation. Let's build something amazing
          together.
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/about"
            className="px-6 py-3 bg-[#48cae4] text-white rounded-lg font-semibold hover:bg-[#36b0c4] transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => window.scrollTo({ top: document.getElementById("about")?.offsetTop, behavior: "smooth" })}
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#48cae4] text-white rounded-lg font-semibold hover:bg-[#36b0c4] transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: "smooth" })}
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Background effect with animation */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-20 bg-gradient-to-r from-[#0a192f] via-[#1d3b5e] to-[#112240]"></div>
    </div>
  );
};

export default Home;
