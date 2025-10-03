import React from 'react'

const Role = ({ title, org, dates, bullets }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm h-full">
    <div className="mb-3">
      <h4 className="font-semibold text-center">{title}</h4>
      <p className="text-sm text-gray-500 text-center">{org} • {dates}</p>
    </div>
    <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-1">
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </div>
)

export default function Experience() {
  const roles = [
    {
      title: 'Rooftop Pool Attendant',
      org: 'Soho House — Chicago, IL',
      dates: 'May 2022 – Aug 2022',
      bullets: [
        'Enhanced guest experience by maintaining high standards of cleanliness and safety.',
        'Coordinated with hospitality team to execute events, improving member engagement.',
        'Developed communication and teamwork skills in a fast-paced environment.'
      ]
    },
    {
      title: 'Outdoor Pool Manager',
      org: 'Habitat Company — Chicago, IL',
      dates: 'May 2020 – Aug 2021',
      bullets: [
        'Oversaw daily pool operations, including staff supervision and scheduling.',
        'Implemented safety protocols and organized resident events, improving community satisfaction.',
        'Strengthened leadership, problem-solving, and operational management skills.'
      ]
    },
    {
      title: 'Founder/Owner',
      org: 'Ilori ACT Tutoring Services — Chicago, IL',
      dates: 'Aug 2019 – Jan 2021',
      bullets: [
        'Founded and managed a tutoring service, recruiting and training 5+ employees.',
        'Improved student outcomes by analyzing performance data and iterating service offerings.',
        'Handled business operations, marketing, and client relations, building entrepreneurial skills.'
      ]
    },
    {
      title: 'Team Member',
      org: 'Oberweis — Chicago, IL',
      dates: 'June 2019 – Mar 2020',
      bullets: [
        'Delivered high-quality customer service while efficiently preparing and serving products.',
        'Maintained operational standards, ensuring cleanliness and organization.',
        'Developed teamwork, time management, and customer engagement skills applicable to professional settings.'
      ]
    },
    {
      title: 'Kitchen Team Member',
      org: 'Panera Bread — Chicago, IL',
      dates: 'Mar 2020 – May 2020',
      bullets: [
        'Supported food preparation and maintained strict hygiene standards in a fast-paced environment.',
        'Streamlined workflow and collaborated with team members to meet service deadlines.',
        'Enhanced attention to detail, efficiency, and collaboration skills relevant to analytical and operational roles.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-10 bg-gray-50 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2 mt-4">
        {roles.map((r, idx) => <Role key={idx} {...r} />)}
      </div>
    </section>
  )
}
