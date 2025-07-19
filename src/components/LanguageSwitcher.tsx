import React from 'react';
import { useTranslation } from 'react-i18next';

const retroBtn =
  'px-4 py-2 font-mono text-lg border-2 rounded-none transition-all duration-150 cursor-pointer';
const activeRetro =
  'bg-yellow-300 border-blue-800 text-blue-900 font-extrabold underline';
const inactiveRetro =
  'bg-white border-pink-700 text-pink-700 hover:bg-pink-200 hover:text-pink-900';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <div className="flex gap-2 items-center">
      <button
        className={
          retroBtn +
          ' ' +
          (i18n.language === 'en' ? activeRetro : inactiveRetro)
        }
        onClick={() => i18n.changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={
          retroBtn +
          ' ' +
          (i18n.language === 'th' ? activeRetro : inactiveRetro)
        }
        onClick={() => i18n.changeLanguage('th')}
        aria-label="เปลี่ยนเป็นภาษาไทย"
      >
        TH
      </button>
    </div>
  );
};

export default LanguageSwitcher; 