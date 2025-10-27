import React, { useState, useMemo } from 'react';
import { ConsoleData } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';
import GameControllerIcon from './icons/GameControllerIcon';

interface AccordionItemProps {
  consoleData: ConsoleData;
  searchQuery: string;
}

const highlightMatch = (text: string, query: string): React.ReactNode => {
  if (!query) {
    return text;
  }
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) {
    return text;
  }

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return (
    <>
      {before}
      <span className="bg-secondary-300 dark:bg-secondary-600 font-bold rounded px-1 text-slate-800 dark:text-slate-100">
        {match}
      </span>
      {after}
    </>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ consoleData, searchQuery }) => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    const consoleNameMatches = consoleData.name.toLowerCase().includes(lowerCaseQuery);
    
    const matchingGames = useMemo(() => {
        if (!lowerCaseQuery) return consoleData.games;
        return consoleData.games.filter(game => game.toLowerCase().includes(lowerCaseQuery));
    }, [consoleData.games, lowerCaseQuery]);

    const hasMatches = consoleNameMatches || matchingGames.length > 0;
    const initialOpenState = searchQuery.length > 0 && hasMatches;
    
    const [isOpen, setIsOpen] = useState(initialOpenState);
    
    React.useEffect(() => {
        setIsOpen(initialOpenState);
    }, [initialOpenState]);

    if (searchQuery.length > 0 && !hasMatches) {
        return null;
    }

    return (
        <div className="border-b border-slate-200 dark:border-slate-700 last:border-b-0">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center text-left p-5 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-t-lg"
        >
            <div className="flex items-center space-x-4">
              <span className="font-bold text-lg text-slate-800 dark:text-slate-100">
                  {highlightMatch(consoleData.name, consoleNameMatches ? searchQuery : '')}
              </span>
              <span className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold px-3 py-1 rounded-full">
                  {consoleData.games.length}
              </span>
            </div>
            <ChevronDownIcon
            className={`w-6 h-6 text-slate-500 transform transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
            }`}
            />
        </button>
        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
            <div className="p-5 bg-slate-50 dark:bg-slate-900/50">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
                {matchingGames.map((game, index) => (
                  <li key={index} className="flex items-start space-x-2 text-slate-700 dark:text-slate-300">
                    <GameControllerIcon className="w-5 h-5 mt-0.5 flex-shrink-0 text-slate-400 dark:text-slate-500"/>
                    <span>{highlightMatch(game, searchQuery)}</span>
                  </li>
                ))}
            </ul>
            </div>
        </div>
        </div>
    );
};

export default AccordionItem;