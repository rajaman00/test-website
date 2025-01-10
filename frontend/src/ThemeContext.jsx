import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Theme provider to wrap the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('day'); // Default to day theme

  // Load the theme from localStorage (optional, to persist between refreshes)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'day';
    setTheme(savedTheme);
  }, []);

  // Save the theme in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'day' ? 'night' : 'day'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
