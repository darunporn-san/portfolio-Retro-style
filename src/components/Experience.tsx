import React from 'react';
import { Briefcase, GraduationCap, CircleDot } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const workExperience = [
  {
    company: 'Officemate (OFM)',
    role: 'IT outsource (Frontend Developer)',
    period: '16 SEP 21 - NOW',
    status: 'Employed',
    projects: [], // No projects for Officemate
  },
  {
    company: 'Digital Associates Co., Ltd.',
    role: 'Middle Frontend Developer',
    period: 'AUG 21 - 16 APR 24',
    projects: [
      {
        name: 'Data Collection for Sports Authority of Thailand',
        status: 'Launched',
        stack: 'Vue2(Admin Panel) + Vue3(User Panel), Bootstrap, Vuetify + Antd',
      },
      {
        name: 'Registration system for Football Association',
        status: 'Launched',
        stack: 'Vue2, TailwindCSS, Vuetify',
      },
      {
        name: 'Platform Data Management',
        status: 'Launched',
        stack: 'Vue3, Antd, TailwindCSS, Pinia',
      },
      {
        name: 'Online Learning system for Football Association',
        status: 'Develop',
        stack: 'Next.JS, Antd, TailwindCSS, React Context API, SWR',
      },
      {
        name: 'Data Collection for NBTC',
        status: 'Develop',
        stack: 'Next.JS, Antd, TailwindCSS, Highcharts, Leaflet, Context API',
      },
      {
        name: 'Tookdee Website',
        status: 'Launched',
        stack: 'Next.JS, Antd, TailwindCSS, Highcharts',
      },
      {
        name: 'Data analytics dashboard for football association',
        status: 'Develop',
        stack: 'Next.JS, SWR, TailwindCSS, Highcharts',
      },
      {
        name: 'Intensive Voice',
        status: 'Develop',
        stack: 'Next.JS, Recoil, TailwindCSS',
      },
      {
        name: 'People Counting',
        status: 'Launched',
        stack: 'Next.JS, Antd, Redux, Highcharts',
      },
    ],
  },
  {
    company: 'Softnix Technology Co.,Ltd.',
    role: 'Junior Frontend Developer',
    period: 'APR 19 - JUL 21',
    projects: [
      {
        name: 'Data and visualization in Data Stewards for Data Government website of State Railway of Thailand',
        status: '',
        stack: 'Wordpress',
      },
      {
        name: 'Wireframe and prototype',
        status: '',
        stack: 'Adobe XD',
      },
      {
        name: 'Redesign and Improvement Website',
        status: '',
        stack: 'React, Redux',
      },
    ],
  },
  {
    company: '2BSimple Co.,Ltd.',
    role: 'Junior Frontend Developer',
    period: 'SEP 18 - FEB 19',
    projects: [
      {
        name: 'Coding Thailand Online Quiz & Challenge, Coding Thailand',
        status: '',
        stack: '',
      },
      {
        name: 'Scraping Data from Facebook',
        status: '',
        stack: '',
      },
      {
        name: 'Improvement for wealth management service',
        status: '',
        stack: '',
      },
    ],
  },
];

const education = [
  {
    school: 'Mahidol University',
    degree: 'Bachelor of Science (English Program), Multimedia Systems',
    faculty: 'Faculty of Information and Technology (ICT)',
    period: '2013 - 2018',
  },
  {
    school: 'Wichienmatu School',
    degree: 'Science-Math (SMA - IPST)',
    period: '2007 - 2013',
  },
];

const retroBox =
  'border-4 border-blue-800 bg-yellow-100 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none font-mono';
const retroTitle =
  'font-mono text-pink-700 text-2xl md:text-4xl font-extrabold tracking-widest uppercase';
const retroSub =
  'font-mono text-blue-900 text-lg md:text-2xl font-bold tracking-wide';
const retroTimeline =
  'border-l-4 border-dashed border-pink-700 pl-8';
const retroCard =
  'bg-white border-2 border-blue-700 shadow-[2px_2px_0_0_rgba(0,0,0,1)] p-4 md:p-6 mb-8 rounded-none font-mono';
const retroBadge =
  'bg-pink-200 border border-pink-700 text-pink-900 px-2 py-0.5 rounded-none font-bold text-xs ml-2';
const retroStack =
  'bg-blue-100 border border-blue-700 text-blue-900 px-2 py-0.5 rounded-none font-mono text-xs ml-2';
const retroIcon =
  'inline-block align-middle mr-2 text-pink-700';

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-12 px-2 md:py-20 md:px-0 bg-yellow-50 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl md:text-5xl" role="img" aria-label="floppy">💾</span>
            <h2 className={retroTitle}>{t('experience.title')}</h2>
            <span className="text-3xl md:text-5xl" role="img" aria-label="computer">🖥️</span>
          </div>
          <div className="w-32 h-2 mx-auto bg-pink-700 mb-2"></div>
          <div className="mt-2 text-blue-900 font-bold flex items-center justify-center gap-2 font-mono">
            <span className="text-lg animate-pulse">◉</span>
            {t('experience.employed')} — {t('experience.frontendDeveloper')} & {t('experience.exploring')}
            <span className="text-xs text-gray-500 ml-2">(last updated: 16 September 2024)</span>
          </div>
        </div>

        {/* Work Timeline */}
        <div className={retroTimeline + ' mb-16'}>
          {workExperience.map((job, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-10 top-4 flex flex-col items-center">
                <span className="text-2xl md:text-3xl" role="img" aria-label="briefcase">💼</span>
                <span className="w-1 h-full bg-pink-700 block"></span>
              </div>
              <div className={retroCard + ' ml-2 md:ml-0'}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <div className={retroSub}>{job.company}</div>
                  <div className="text-xs md:text-sm text-gray-600 font-bold font-mono">{job.period}</div>
                </div>
                <div className="text-blue-800 font-bold mb-2 font-mono">{job.role}</div>
                {job.projects && job.projects.length > 0 && (
                  <ul className="list-disc ml-6 text-blue-900 text-sm space-y-1">
                    {job.projects.map((proj, pidx) => (
                      <li key={pidx} className="mb-1">
                        <span className="font-bold text-pink-700">{proj.name}</span>
                        {proj.status && (
                          <span className={retroBadge}>{proj.status}</span>
                        )}
                        {proj.stack && (
                          <span className={retroStack}>{proj.stack}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl md:text-3xl" role="img" aria-label="grad">🎓</span>
            <h3 className={retroTitle + ' text-xl md:text-2xl'}>{t('experience.education')}</h3>
            <span className="text-2xl md:text-3xl" role="img" aria-label="books">📚</span>
          </div>
          <div className={retroTimeline}>
            {education.map((edu, idx) => (
              <div key={idx} className={retroCard + ' ml-2 md:ml-0'}>
                <div className={retroSub}>{edu.school}</div>
                <div className="text-blue-800 font-bold mb-1 font-mono">{edu.degree}</div>
                {edu.faculty && <div className="text-gray-700 text-sm mb-1 font-mono">{edu.faculty}</div>}
                <div className="text-xs text-gray-600 font-mono">{edu.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 