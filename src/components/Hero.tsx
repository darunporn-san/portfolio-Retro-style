import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  // Retro styles for mobile
  const retroBox = 'border-4 border-blue-800 bg-yellow-100 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none font-mono';
  const retroTitle = 'font-mono text-pink-700 text-3xl font-extrabold tracking-widest uppercase';
  const retroSub = 'font-mono text-blue-900 text-xl font-bold tracking-wide';
  const retroBtn = 'bg-pink-200 border-2 border-pink-700 text-pink-900 px-6 py-2 rounded-none font-mono font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-pink-300 transition-all duration-200';
  const retroImgBox = 'border-4 border-blue-800 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-none flex items-center justify-center';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-yellow-50 relative">
      {/* Retro Mobile Hero */}
      <div className="block md:hidden w-full">
        <div className="container mx-auto px-2 py-8">
          <div className="flex flex-col-reverse items-center justify-between gap-8">
            <div className="w-full mb-8">
              <div className={retroBox + ' p-4'}>
                <h1 className={retroTitle + ' mb-2 flex flex-wrap items-center gap-2 text-2xl'}>
                  <span role="img" aria-label="wave">👾</span> {t('hero.greeting')}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('hero.name')}
                  </span>
                  <span className="block w-full text-base text-gray-500 font-normal mt-1">
                    {t('hero.callMe')}
                  </span>
                </h1>
                <h2 className={retroSub + ' mb-2 text-base'}>
                  {t('hero.role')}
                </h2>
                <p className="text-sm text-blue-900 mb-6 leading-relaxed max-w-full font-mono">
                  {t('hero.description')}
                </p>
                <div className="flex flex-col gap-3 w-full">
                  <a href="#projects" className={retroBtn + ' text-center w-full'}>
                    <span role="img" aria-label="rocket">🚀</span> {t('hero.exploreProjects')}
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={retroBtn + ' flex items-center justify-center gap-2 w-full'}>
                    <span role="img" aria-label="floppy">💾</span> {t('hero.downloadResume')}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-10 sm:mt-0">
              <div className={retroImgBox + ' w-40 h-40'}>
                <img
                  src="/profile-new.jpg"
                  alt="Darunporn Santisawaddiwong profile"
                  className="w-36 h-36 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modern Tablet/Desktop Hero */}
      <div className="hidden md:block w-full">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                  {t('hero.greeting')}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('hero.name')}
                  </span>
                  <span className="block text-lg text-gray-500 font-normal mt-2">
                    {t('hero.callMe')}
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6 font-light">
                  {t('hero.role')}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                  {t('hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    {t('hero.exploreProjects')}
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    {t('hero.downloadResume')}
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 animate-pulse-slow">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <img
                      src="/profile-new.jpg"
                      alt="Profile"
                      className="w-72 h-72 lg:w-88 lg:h-88 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-bounce-slow opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full animate-bounce-slow opacity-80" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;