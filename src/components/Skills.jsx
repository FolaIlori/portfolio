import React from 'react'
import { 
  FaReact, FaPython, FaAws, FaGitAlt, FaChartBar, FaHtml5, FaCss3Alt, FaUniversalAccess, FaTable
} from "react-icons/fa";
import { 
  SiJavascript, SiMysql, SiVuedotjs, SiTableau, SiFigma, SiPandas, SiNumpy
} from "react-icons/si";

export default function Skills() {
  const tech = [
    { name: 'React', icon: <FaReact className="text-sky-500 text-3xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 text-3xl" /> },
    { name: 'Python', icon: <FaPython className="text-blue-600 text-3xl" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-400 text-3xl" /> },
    { name: 'AWS', icon: <FaAws className="text-orange-500 text-3xl" /> },
    { name: 'Vue.js', icon: <SiVuedotjs className="text-green-500 text-3xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 text-3xl" /> },
    { name: 'Power BI', icon: <FaChartBar className="text-yellow-600 text-3xl" /> },
    { name: 'Tableau', icon: <SiTableau className="text-indigo-600 text-3xl" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: 'Figma', icon: <SiFigma className="text-pink-500 text-3xl" /> },
    { name: 'Accessibility', icon: <FaUniversalAccess className="text-purple-500 text-3xl" /> },
    { name: 'Pandas', icon: <SiPandas className="text-black text-3xl" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-blue-500 text-3xl" /> },
    { name: 'Excel', icon: <FaTable className="text-green-600 text-3xl" /> },
  ]

  const soft = [
    'Communication','Collaboration','Critical Thinking','Empathy','Curiosity','Problem Solving','Adaptability','Presentation Skills','Leadership','Research & Analysis',
  ]

  return (
    <section id="skills" className="py-20 px-10 bg-gray-50 max-w-6xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4 text-center">Technical</h3>
          <div className="grid grid-cols-3 gap-6">
            {tech.map((t) => (
              <div key={t.name} className="flex flex-col items-center">
                {t.icon}
                <p className="mt-2 text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4 text-center">Soft Skills</h3>
          <ul className="space-y-2 text-gray-700">
            {soft.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
