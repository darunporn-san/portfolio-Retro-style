import React, { useState } from 'react';

const retroBox = 'border-4 border-blue-800 bg-yellow-100 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none font-mono';
const retroTitle = 'font-mono text-pink-700 text-2xl md:text-3xl font-extrabold tracking-widest uppercase mb-1';
const retroDesc = 'font-mono text-blue-900 text-base mb-2';
const retroList = 'list-disc list-inside text-blue-900 font-mono mb-2 pl-4';
const retroBadge = 'bg-blue-100 border border-blue-800 text-blue-900 px-2 py-0.5 rounded-none font-mono text-xs mr-2 mb-1 inline-block';
const retroSection = 'bg-yellow-50 py-16';
const retroContainer = 'container mx-auto px-4';
const retroTab = 'px-6 py-2 font-mono text-lg border-2 border-blue-800 rounded-none font-bold transition-all duration-150 cursor-pointer';
const retroTabActive = 'bg-pink-200 text-pink-900 border-b-0 border-pink-700 z-10';
const retroTabInactive = 'bg-white text-blue-800 hover:bg-yellow-100 border-b-4 border-blue-800 z-0';

const personalProjects = [
  {
    title: 'E-Learning EduLearn',
    description:
      'A modern e-learning platform for online courses, quizzes, and progress tracking. Built for scalability and a seamless user experience. Connected to Supabase backend via Express API.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Express', 'Vercel'],
    url: 'https://e-learning-edulearn.vercel.app/',
    github: 'https://github.com/darunporn-san/E-learning',
    status: 'Pending' // หรือ 'Completed'

    
  },
  {
    title: 'E-Learning EduLearn Admin',
    description:
      'A CMS dashboard for managing courses, users, and content for the E-Learning EduLearn platform.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    url: 'https://e-learning-admin-edulearn.vercel.app/',
    github: 'https://github.com/darunporn-san/E-learning',
    status: 'Pending' // หรือ 'Completed'

  },
  {
    title: 'Reservation Station',
    description:
      'A booking system for training sessions. Integrates with LINE OA: when a user books, the admin receives a notification via LINE.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'LINE OA', 'Vercel'],
    url: 'https://reservation-station.vercel.app/',
    github: 'https://github.com/darunporn-san/boxing-station',
    status: 'Completed' // หรือ 'Completed'

  },
  {
    title: 'Spa Therapist Booking',
    description:
      'A booking platform for spa therapists, allowing users to schedule appointments online.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    url: 'https://spa-therapist.vercel.app/',
    github: 'https://github.com/darunporn-san/Spa-Therapist',
    status: 'Completed' // หรือ 'Completed'

  },
  {
    title: 'Delivery App (Expo Snack)',
    description:
      'A mobile delivery app built with React Native and Expo. Try it instantly on web or mobile via Expo Snack.',
    tech: ['React Native', 'Expo', 'JavaScript'],
    url: 'https://snack.expo.dev/@darunsant/delivery-app',
    github: '',
    status: 'Pending' // หรือ 'Completed'

  }
];

const officeProjects = [
  {
    title: 'Data Collection for NBTC',
    description: 'Addresses challenges with communication cables in Bangkok. Integrates Google Maps for route selection, distance measurement, and problem area identification.',
    features: [
      'Route display with info and click-to-view details',
      'Location selection with adjustable radius',
      'Route coordinate selection and display',
      'Measuring on images/360 snapshots',
    ],
    tech: ['Google Maps API', 'Leaflet', 'GeoJson'],
  },
  {
    title: 'All Project in Sports Authority of Thailand',
    description: 'Big Data collection for sports, divided into four sub-projects.',
    features: [
      'Data Collection: Athletes, personnel, stadiums, teams, competitions',
      'Academy: Questionnaires and certificates for athletes',
      'E-Learning: Courses, video, chat, exams',
      'KPI: Graph and map analytics',
    ],
    tech: ['Data Visualization', 'Chat', 'E-Learning', 'Map Integration'],
  },
  {
    title: 'Other Projects',
    description: '',
    features: [
      'DA - People Counting / Tookdee Website: Dashboards and reports for data display',
      'Softnix - Railway Project: Data Stewards, WordPress, Adobe XD, dashboard redesign',
      '2Bsimple: CSS refinement, learning Angular/React',
    ],
    tech: [],
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'office'>('personal');
  const projectsToShow = activeTab === 'personal' ? personalProjects : officeProjects;

  return (
    <section id="projects" className={retroSection} aria-labelledby="projects-heading">
      <div className={retroContainer}>
        <header className="text-center mb-10">
          <h2 id="projects-heading" className="font-mono text-pink-700 text-3xl md:text-5xl font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 mb-2">
            <span role="img" aria-label="folder">📂</span> Portfolio Showcase
          </h2>
          <div className="w-32 h-2 mx-auto bg-pink-700 mb-2"></div>
          <p className="text-blue-900 max-w-2xl mx-auto font-mono mb-4">
            Selected projects and dashboards I've built over the years.
          </p>
        </header>
        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-2">
          <button
            className={retroTab + ' ' + (activeTab === 'personal' ? retroTabActive : retroTabInactive)}
            onClick={() => setActiveTab('personal')}
            aria-selected={activeTab === 'personal'}
            aria-controls="personal-projects"
          >
            🌟 Personal Projects
          </button>
          <button
            className={retroTab + ' ' + (activeTab === 'office' ? retroTabActive : retroTabInactive)}
            onClick={() => setActiveTab('office')}
            aria-selected={activeTab === 'office'}
            aria-controls="office-projects"
          >
            🏢 Office/Work Projects
          </button>
        </div>
        {/* Projects Grid */}
        <div
          id={activeTab === 'personal' ? 'personal-projects' : 'office-projects'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch"
        >
          {projectsToShow.map((project, idx) => (
            <div key={idx} className={retroBox + ' p-6 flex flex-col h-full relative'}>
              {/* GitHub link at top right */}
              {'github' in project && project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 text-blue-700 hover:text-pink-700"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.85 1.19 3.11 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.44 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/></svg>
                </a>
              )}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className={retroTitle}>
                    <span role="img" aria-label={activeTab === 'personal' ? 'rocket' : 'chip'}>{activeTab === 'personal' ? '🚀' : '💾'}</span> {project.title}
                  </h4>
                  {project.status && (
                    <span className={
                      'ml-2 px-2 py-0.5 rounded font-mono text-xs font-bold ' +
                      (project.status === 'Completed'
                        ? 'bg-green-200 text-green-800 border border-green-700'
                        : 'bg-yellow-200 text-yellow-800 border border-yellow-700')
                    }>
                      {project.status}
                    </span>
                  )}
                </div>
                <p className={retroDesc}>{project.description}</p>
                {'features' in project && Array.isArray(project.features) && project.features.length > 0 && (
                  <ul className={retroList}>
                    {project.features.map((feature: string, fidx: number) => (
                      <li key={fidx}>{feature}</li>
                    ))}
                  </ul>
                )}
                {project.tech && project.tech.length > 0 && (
                  <div className="mb-2">
                    {project.tech.map((tech, tidx) => (
                      <span key={tidx} className={retroBadge}>{tech}</span>
                    ))}
                  </div>
                )}
              </div>
              {'url' in project && project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-4 py-2 bg-pink-200 border-2 border-pink-700 text-pink-900 font-bold rounded-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-pink-300 transition-all duration-200"
                  aria-label={`Visit live site for ${project.title}`}
                >
                  Visit Live Site
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;