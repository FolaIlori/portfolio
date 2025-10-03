import React from 'react';

export default function Home() {
  return (
    <section
      id="home"
      className="grid gap-8 md:grid-cols-2 items-center min-h-screen p-10 max-w-6xl mx-auto"
    >
      {/* Left side: text */}
      <div>
        <h1 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">
          Hi — I’m Fola.
          <br />
          I create data-driven solutions and user-centered digital experiences.
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          I was born in Nigeria and raised in Chicago, a journey that shaped my perspective on culture, community, and problem-solving. Growing up between these two worlds taught me adaptability, empathy, and how to navigate diverse perspectives, qualities that guide both my work and personal life.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          I graduated from the University of Iowa with a B.A. in Informatics (Human-Computer Interaction) and a minor in Psychology. During my studies, I explored how technology and data can be used to design better systems, improve digital experiences, and inform ethical and inclusive decision-making. My academic projects gave me hands-on experience in data analysis, full-stack development, cloud technologies, and UX design.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          I’m passionate about the intersection of people, data, and technology, specifically how digital systems can empower individuals, optimize processes, and promote fairness and accessibility. Growing up in Chicago also instilled in me a love for urban life, community engagement, and cultural diversity, all of which influence how I approach my work and the impact I hope to create.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a
            href="#projects"
            className="px-4 py-2 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700"
          >
            View Projects
          </a>
          <a
            href="/Fola-Ilori-Resume.pdf"
            download
            className="px-4 py-2 rounded-md border hover:bg-gray-100"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right side: photo */}
      <div className="flex justify-center">
        <img
          src="/fola.jpg"
          alt="Fola Ilori"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
