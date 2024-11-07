import React from 'react';

const Projects = () => {
  return (
    <div className="bg-[#0a192f] text-[#48cae4] min-h-screen">
      {/* Header Section */}
      <header className="text-center py-20">
        <h1 className="text-5xl font-semibold">My Projects</h1>
        <p className="text-lg mt-4">You are currently viewing my masterpiece, a professional website built and designed by me.</p>
      </header>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        {/* Project Card */}
        <div className="bg-[#112240] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#ffb703]">The Masterpiece Website</h3>
          <p className="mt-4 text-lg">
            This site you're currently on is a project I am deeply proud of! It’s a professional website that I designed and built from scratch. Using the latest technologies like React, Tailwind CSS, and modern development practices, I’ve crafted a user-friendly and visually stunning interface.
          </p>
          <p className="mt-4 text-lg">
            Although it's still under active development, I’m excited to showcase what has been accomplished so far. This website is meant to demonstrate my skills in front-end development and give a glimpse into the kind of polished, functional web applications I can build.
          </p>
          <p className="mt-4 text-lg">
            As I continue to improve it, you can expect more interactive features, design enhancements, and an even better user experience. Stay tuned for future updates as I keep building on this masterpiece!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
