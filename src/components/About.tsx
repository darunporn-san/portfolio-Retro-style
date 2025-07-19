import React from 'react';
import { Code2, BarChart2, Zap, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Developer',
      description: 'Developed user interfaces using Vue.js, React, and modern CSS frameworks.'
    },
    {
      icon: BarChart2,
      title: 'Mobile Learning Path',
      description: 'Currently learning React Native to create cross-platform mobile apps.'
    },
    {
      icon: Zap,
      title: 'Backend with Supabase',
      description: 'Building backend features with Supabase including authentication and database.'
    },
    {
      icon: BookOpen,
      title: 'Always Learning',
      description: 'Passionate about continuous learning and improving through side projects.'
    }
  ];

  const retroBox = 'border-4 border-blue-800 bg-yellow-100 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none font-mono';
  const retroTitle = 'font-mono text-pink-700 text-3xl md:text-5xl font-extrabold tracking-widest uppercase';
  const retroSub = 'font-mono text-blue-900 text-xl md:text-2xl font-bold tracking-wide';
  const retroBadge = 'bg-pink-200 border border-pink-700 text-pink-900 px-2 py-0.5 rounded-none font-bold text-xs ml-2';

  return (
    <section id="about" className="py-16 bg-yellow-50" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h2 id="about-heading" className={retroTitle + ' flex items-center justify-center gap-2'}>
            <span role="img" aria-label="about">📝</span> About Me
          </h2>
          <div className="w-32 h-2 mx-auto bg-pink-700 mb-2"></div>
        </header>
       
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <article className={retroBox + ' p-6 mb-6'} aria-labelledby="about-passionate-title">
              <h3 id="about-passionate-title" className={retroSub + ' mb-4'}>
                <span role="img" aria-label="star">⭐</span> Passionate About Building Beautiful, Data-Driven Web Apps
              </h3>
              <p className="text-base md:text-lg text-blue-900 mb-4 font-mono">
                Hi! I'm <strong className="text-pink-700">Darunporn</strong>, a frontend developer with hands-on experience in building modern web applications.<br />
                I specialize in developing responsive interfaces with clean design, using frameworks like <strong className="text-blue-700">Vue.js</strong> and <strong className="text-blue-700">React</strong>.<br />
                Currently, I'm expanding into <strong className="text-pink-700">mobile development</strong> using <strong className="text-blue-700">React Native</strong>, and exploring <strong className="text-pink-700">backend development</strong> through <strong className="text-blue-700">Supabase</strong> to build full-stack applications with ease.<br />
                I enjoy learning new tools, solving real-world problems, and collaborating with others to bring ideas to life. Let’s build something amazing together!
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="Highlights">
                {highlights.map((item, index) => (
                  <li key={index} className={retroBadge + ' flex items-center gap-1'}>
                    <span role="img" aria-label={item.title}>{index === 0 ? '💻' : index === 1 ? '📱' : index === 2 ? '🗄️' : '📚'}</span> {item.title}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <article
                key={index}
                className={retroBox + ' p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2'}
                aria-labelledby={`about-highlight-title-${index}`}
              >
                <div className="w-10 h-10 bg-pink-200 border-2 border-pink-700 flex items-center justify-center mb-2 text-pink-700 text-xl rounded-none">
                  <span role="img" aria-label={item.title}>
                    {index === 0 ? '💻' : index === 1 ? '📱' : index === 2 ? '🗄️' : '📚'}
                  </span>
                </div>
                <h4 id={`about-highlight-title-${index}`} className={retroSub + ' text-base mb-1'}>{item.title}</h4>
                <p className="text-blue-900 text-xs font-mono leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;