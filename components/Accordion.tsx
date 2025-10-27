import React from 'react';
import { ConsoleData } from '../types';
import AccordionItem from './AccordionItem';
import { useLanguage } from '../context/LanguageContext';

interface AccordionProps {
  data: ConsoleData[];
  searchQuery: string;
}

const Accordion: React.FC<AccordionProps> = ({ data, searchQuery }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
      <div className="p-5 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{t.allConsoles}</h2>
      </div>
      <div>
        {data.map((consoleData) => (
          <AccordionItem
            key={consoleData.name}
            consoleData={consoleData}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;