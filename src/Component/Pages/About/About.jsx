import React from 'react';

const About = () => {
  return (
    <div className="bg-[#0a192f] text-[#48cae4] min-h-screen">
      {/* Header Section */}
      <header className="text-center py-20">
        <h1 className="text-5xl font-semibold text-[#ffb703]">About Me</h1>
        <p className="text-lg mt-4">A passionate developer who loves to create innovative solutions.</p>
      </header>

      {/* About Me Section */}
      <section className="max-w-6xl mx-auto px-5 py-16 text-center">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-[#ffb703]">Hello, I'm Aeon!</h2>
            <p className="mt-4 text-lg">
              I'm a self-taught programmer and a passionate problem solver. I specialize in front-end development, with a keen interest in building beautiful and functional web applications.
              I enjoy working with the latest technologies like React, Node.js, and always seek new ways to improve my development skills.
            </p>
            <p className="mt-4 text-lg">
              My goal is to continually challenge myself, improve my skills, and make a meaningful impact through my work. I believe that technology should be accessible, efficient, and fun.
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* Add your photo or graphic here */}
            <img src="/src/assets/Aeon.jpeg" alt="Aeon" className="rounded-full w-64 h-64 border-4 border-[#ffb703] shadow-lg" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#1a2b3d] text-[#48cae4] py-16">
        <h2 className="text-3xl text-center font-bold mb-8">My Skills</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#112240] rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold text-[#ffb703]">Web Development</h3>
            <ul className="mt-4 text-lg">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Context API</li>
              <li>Tailwind CSS, Bootstrap</li>
            </ul>
          </div>
          <div className="text-center p-6 bg-[#112240] rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold text-[#ffb703]">Backend Development</h3>
            <ul className="mt-4 text-lg">
              <li>Node.js, Express</li>
              <li>MongoDB, Mongoose</li>
              <li>API Development</li>
            </ul>
          </div>
          <div className="text-center p-6 bg-[#112240] rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold text-[#ffb703]">Other Skills</h3>
            <ul className="mt-4 text-lg">
              <li>Git, GitHub</li>
              <li>Problem Solving & Algorithms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#112240] text-[#48cae4] py-6 text-center">
        <p>&copy; 2024 Aeon Aeon Roamer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
