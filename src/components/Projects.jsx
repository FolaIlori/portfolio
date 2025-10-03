import React from "react";

const ProjectCard = ({ title, bullets, tech, live, github, report, notebook, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition h-full">
    {image && (
      <img
        src={image}
        alt={`${title} screenshot`}
        className="rounded-md mb-4 w-full h-48 object-contain bg-gray-100"
      />
    )}
    <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2 mb-4 justify-center">
      {tech.map((t, i) => (
        <span key={i} className="px-2 py-1 bg-gray-200 rounded-lg text-sm">
          {t}
        </span>
      ))}
    </div>
    <div className="flex gap-4 flex-wrap justify-center">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded border bg-teal-600 text-white hover:bg-teal-700"
        >
          Live Demo
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded border hover:bg-gray-100"
        >
          Repo
        </a>
      )}
      {report && (
        <a
          href={report}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded border hover:bg-gray-100"
        >
          Report
        </a>
      )}
      {notebook && (
        <a
          href={notebook}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded border hover:bg-gray-100"
        >
          Notebook
        </a>
      )}
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: "SummerJobs – Job-Finding Web App",
      bullets: [
        "Built a full-stack job search platform in a 4-person Agile capstone team.",
        "Implemented authentication and role-based access using AWS Cognito.",
        "Developed job posting, search, and filtering features with React + DynamoDB.",
        "Deployed production-ready build on AWS Amplify."
      ],
      tech: ["React", "AWS Lambda", "DynamoDB", "Cognito"],
      live: "https://final.d3p1kpnoho0cyj.amplifyapp.com/",
      github: "https://github.com/FolaIlori/summerjobs",
      image: "/projects/summerjobs.png",
    },
    {
      title: "Movie Recommendation App",
      bullets: [
        "Designed and developed a responsive web app integrating TMDB API for real-time movie suggestions.",
        "Conducted usability testing (SUS, NASA-TLX) to refine UI and improve accessibility.",
        "Added social features: friends, watchlists, and personalized recommendations.",
        "Focused on performance optimization and mobile-first design."
      ],
      tech: ["Vue.js", "JavaScript", "Axios", "CSS", "User Testing"],
      github: "https://github.com/FolaIlori/movie-recommendation-app",
      report: "/projects/movie-rec-report.pdf",
      image: "/projects/movie-rec.png",
    },
    {
      title: "AI Fairness Evaluation",
      bullets: [
        "Researched fairness in machine learning models on the UCI Adult dataset (32,000+ samples).",
        "Applied metrics including equal opportunity, demographic parity, and disparate impact.",
        "Used AIF360 and Fairlearn to analyze bias across demographic groups.",
        "Produced a detailed report and Jupyter notebook demonstrating findings and visualizations."
      ],
      tech: ["Python", "scikit-learn", "AIF360", "Fairlearn", "matplotlib"],
      report: "/projects/ai-fairness-report.pdf",
      notebook: "/projects/ai-fairness-notebook.pdf",
      image: "/projects/ai-fairness.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}
