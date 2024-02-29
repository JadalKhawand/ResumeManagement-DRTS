import { createContext, useState } from "react";
interface IThemeContextInterface {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
interface IThemeContextProviderProps{
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContextInterface>({
  darkMode: false,
  toggleDarkMode: () => {},
});

const ThemeContextProvider = ({ children } : IThemeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode: () => void = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
