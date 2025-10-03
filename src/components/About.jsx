import React from "react";

export default function About() {
  return (
    <section id="about" className="p-8 flex flex-col md:flex-row items-center gap-8">
      <img
        src="/fola.jpg"
        alt="Fola Ilori"
        className="w-40 h-40 rounded-full object-cover shadow-md"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hi, I’m <span className="font-semibold">Fola Ilori</span>, a recent
          Informatics (HCI) graduate passionate about building data-driven and
          user-focused solutions. I have hands-on experience in full-stack
          development, cloud technologies, and AI ethics research. I’m eager to
          apply my skills in real-world projects and continue growing as a
          software engineer.
        </p>
      </div>
    </section>
  );
}