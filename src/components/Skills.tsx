import React from 'react';
import { useTranslation } from 'react-i18next';

const techStack = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Vuetify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Tailwind', icon: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Directus', icon: 'https://www.vectorlogo.zone/logos/directus/directus-icon.svg' },
];

const learningStack = [
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Supabase', icon: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png' },
  { name: 'Bulma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

const retroBox = 'border-4 border-blue-800 bg-yellow-100 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none font-mono';
const retroTitle = 'font-mono text-pink-700 text-3xl md:text-5xl font-extrabold tracking-widest uppercase';
const retroBadge = 'bg-pink-200 border border-pink-700 text-pink-900 px-2 py-0.5 rounded-none font-bold text-xs mt-2';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className={retroTitle + ' flex items-center justify-center gap-2'}>
            <span role="img" aria-label="tools">🛠️</span> {t('skills.title')}
          </h2>
          <div className="w-32 h-2 mx-auto bg-pink-700 mb-2"></div>
          <p className="text-blue-900 max-w-2xl mx-auto font-mono mb-4">
            {t('skills.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          {/* Tech Stack Column */}
          <div className={retroBox + ' p-6 flex flex-col items-center md:col-start-1 md:col-span-1'}>
            <h3 className="font-mono text-blue-900 text-xl font-bold mb-4 flex items-center gap-2">
              <span role="img" aria-label="chip">💾</span> {t('skills.techStackTitle')}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:gap-8 justify-items-center w-full">
              {techStack.map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="border-2 border-blue-800 bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] p-3 mb-2" style={{ width: 64, height: 64 }}>
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-mono text-blue-900 text-sm font-bold text-center mt-1">{tech.name}</span>
                  <span className={retroBadge + ' text-center'}>★</span>
                </div>
              ))}
            </div>
          </div>
          {/* Currently Learning Column */}
          <div className={retroBox + ' p-6 flex flex-col items-center md:col-start-2 md:col-span-1'}>
            <h3 className="font-mono text-pink-700 text-xl font-bold mb-4 flex items-center gap-2">
              <span role="img" aria-label="book">📚</span> {t('skills.currentlyLearningTitle')}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center w-full">
              {learningStack.map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="border-2 border-pink-700 bg-white shadow-[2px_2px_0_0_rgba(255,0,128,1)] p-3 mb-2" style={{ width: 64, height: 64 }}>
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-mono text-pink-700 text-sm font-bold text-center mt-1">{tech.name}</span>
                  <span className={retroBadge + ' text-center'}>{t('skills.learningBadge')}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Empty column for centering */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;