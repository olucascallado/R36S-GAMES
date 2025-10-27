import React from 'react';
import ConsoleIcon from './icons/ConsoleIcon';
import GameIcon from './icons/GameIcon';
import { useLanguage } from '../context/LanguageContext';

interface DashboardProps {
  totalConsoles: number;
  totalGames: number;
}

const Dashboard: React.FC<DashboardProps> = React.memo(({ totalConsoles, totalGames }) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg flex items-center space-x-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-primary-400 dark:hover:ring-primary-500">
        <div className="bg-primary-100 dark:bg-primary-900/50 p-4 rounded-2xl">
          <ConsoleIcon className="w-10 h-10 text-primary-500 dark:text-primary-400" />
        </div>
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-base font-medium">
            {t.totalConsoles}
          </p>
          <p className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            {totalConsoles}
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg flex items-center space-x-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-green-400 dark:hover:ring-green-500">
        <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-2xl">
          <GameIcon className="w-10 h-10 text-green-500 dark:text-green-400" />
        </div>
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-base font-medium">
            {t.totalGames}
          </p>
          <p className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            {totalGames.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
});

export default Dashboard;