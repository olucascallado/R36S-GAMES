import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import TranslateIcon from './icons/TranslateIcon';
import ConsoleIcon from './icons/ConsoleIcon';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-500 sticky top-0 z-10 shadow-lg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <ConsoleIcon className="h-10 w-10 text-white/90"/>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              {t.title}
            </h1>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                onBlur={() => setTimeout(() => setIsLangMenuOpen(false), 200)}
                className="p-2.5 rounded-full hover:bg-white/20 transition-colors"
                aria-label={t.language}
              >
                <TranslateIcon className="w-6 h-6" />
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-2xl py-1 ring-1 ring-black ring-opacity-5 animate-fadeIn">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                      language === 'en' ? 'bg-primary-500 text-white' : 'text-slate-700 dark:text-slate-200'
                    } hover:bg-primary-100 dark:hover:bg-slate-700`}
                  >
                    {t.english}
                  </button>
                  <button
                    onClick={() => setLanguage('pt')}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                      language === 'pt' ? 'bg-primary-500 text-white' : 'text-slate-700 dark:text-slate-200'
                    } hover:bg-primary-100 dark:hover:bg-slate-700`}
                  >
                    {t.portuguese}
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-white/20 transition-colors"
              aria-label={t.theme}
            >
              {theme === 'light' ? (
                <MoonIcon className="w-6 h-6" />
              ) : (
                <SunIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;