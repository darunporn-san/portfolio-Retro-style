import React from 'react';
import { Code, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const retroBox = 'border-t-4 border-blue-800 bg-yellow-100 shadow-[0_-4px_0_0_rgba(0,0,0,1)] rounded-none font-mono';
  const { t } = useTranslation();
  return (
    <footer className={retroBox + ' py-6 text-center'}>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-blue-900 font-mono">
        <span role="img" aria-label="copyright">©️</span> {new Date().getFullYear()} {t('footer.text')}

      </div>
    </footer>
  );
};

export default Footer;