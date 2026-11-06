import React, { createContext, useState, useContext } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextData {
  mode: ThemeMode;
  toggleTheme: () => void;
  colors: {
    background: string;
    card: string;
    text: string;
    primaryRed: string;
    darkBrown: string;
    activeTabBg: string;
  };
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Hoisting theme state to the top level prevents prop drilling and ensures 
  // rapid, synchronous style recalculations across the entire navigation stack.
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const colors = {
    background: mode === 'light' ? '#FDFBF7' : '#121212',
    card: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
    text: mode === 'light' ? '#4D3327' : '#FDFBF7',
    primaryRed: '#C8102E',
    darkBrown: mode === 'light' ? '#4D3327' : '#E0DCD6',
    activeTabBg: mode === 'light' ? '#F5D6D8' : '#3D1A20',
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useAppTheme requires a ThemeProvider wrapper');
  return context;
};