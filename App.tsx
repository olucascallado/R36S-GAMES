import React, { useState, useMemo } from 'react';
import { GAME_DATA } from './constants/data';
import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

const AppContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { totalConsoles, totalGames } = useMemo(() => {
    return {
      totalConsoles: GAME_DATA.length,
      totalGames: GAME_DATA.reduce((sum, console) => sum + console.games.length, 0),
    };
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen font-sans transition-colors duration-300">
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Dashboard totalConsoles={totalConsoles} totalGames={totalGames} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Accordion data={GAME_DATA} searchQuery={searchQuery} />
      </main>
      <footer className="mt-8 text-center py-6 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} R36S Game Database. Built for retro gamers.
        </p>
      </footer>
    </div>
  );
};


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;