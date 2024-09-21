/* eslint-disable prettier/prettier */
import { createContext, useState, useContext } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Crear el proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar el contexto en cualquier componente
export const useTheme = () => useContext(ThemeContext);