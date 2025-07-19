import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="flex justify-center items-center py-12"
      aria-label={t('contact.title')}
    >
      <div className="bg-yellow-100 border-2 border-blue-800 shadow-[4px_4px_0_0_rgba(0,0,0,1)] max-w-4xl w-full px-6 py-8 rounded-none flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 font-mono">{t('contact.title')}</h2>
        <div className="w-full flex flex-col md:flex-row md:divide-x divide-blue-800 divide-y-0 md:divide-y-0 divide-y mb-6">
          <div className="flex items-center justify-center flex-1 py-2 md:py-0">
            <Mail className="w-5 h-5 mr-2 text-blue-800" />
            <span className="font-mono text-blue-900">darunporn.san@gmail.com</span>
          </div>
          <div className="flex items-center justify-center flex-1 py-2 md:py-0">
            <Phone className="w-5 h-5 mr-2 text-blue-800" />
            <span className="font-mono text-blue-900">+66 90-563-3940</span>
          </div>
          <div className="flex items-center justify-center flex-1 py-2 md:py-0">
            <MapPin className="w-5 h-5 mr-2 text-blue-800" />
            <span className="font-mono text-blue-900">{t('contact.address')}</span>
          </div>
        </div>
        <div className="flex items-center space-x-6 mt-2">
          <a href="https://github.com/mint-profile" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-pink-700 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/mint-profile" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-pink-700 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;