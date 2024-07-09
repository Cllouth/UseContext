import React, { useContext, useState } from "react";
 
// Criando o contexto para o tema
const ThemeContext = React.createContext();
 
// Componente que vai prover o contexto do tema
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado inicial do tema
 
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
 
// Componente que usa o useContext para alternar o tema
const ThemeChanger = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
 
  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Alterar Tema</button>
      <p>Tema atual: {theme}</p>
    </div>
  );
};
 
export { ThemeProvider, ThemeChanger };