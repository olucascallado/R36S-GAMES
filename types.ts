import { ReactNode } from 'react';

export interface ConsoleData {
  name: string;
  games: string[];
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export type Language = 'en' | 'pt';

export interface Translations {
  [key: string]: {
    title: string;
    searchPlaceholder: string;
    totalConsoles: string;
    totalGames: string;
    allConsoles: string;
    language: string;
    english: string;
    portuguese: string;
    theme: string;
    light: string;
    dark: string;
  };
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations[Language];
}

export interface LanguageProviderProps {
  children: ReactNode;
}
