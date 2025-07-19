import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('header.nav.home'), id: 'home' },
    { href: '#about', label: t('header.nav.about'), id: 'about' },
    { href: '#skills', label: t('header.nav.skills'), id: 'skills' },
    { href: '#experience', label: t('header.nav.experience'), id: 'experience' },
    { href: '#projects', label: t('header.nav.projects'), id: 'projects' },
    { href: '#contact', label: t('header.nav.contact'), id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 60,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  const retroNav = 'font-mono border-2 border-blue-800 bg-yellow-100 shadow-[2px_2px_0_0_rgba(0,0,0,1)] rounded-none px-3 py-1 mx-1 text-blue-900 hover:bg-pink-200 hover:text-pink-700 transition-all duration-200';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4  bg-white ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800 flex items-center gap-2 font-mono"><span role="img" aria-label="mint">🕹️</span> Mint Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={e => handleNavClick(e, item.href, item.id)}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${activeSection === item.id ? 'text-blue-600 font-bold' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links and Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 w-auto flex-1 justify-end">
            <div className="flex items-center space-x-4">
              <a href="https://github.com/mint-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/mint-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:darunporn.san@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="ml-8">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={e => handleNavClick(e, item.href, item.id)}
                  className={retroNav + ` ${activeSection === item.id ? 'bg-pink-200 text-pink-700 font-extrabold' : ''}`}
                >
                  <span role="img" aria-label="menu">📺</span> {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <a href="https://github.com/mint-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/mint-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:darunporn.san@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <div className="block md:hidden pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;