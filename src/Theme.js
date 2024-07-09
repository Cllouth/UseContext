import React, { useContext, useState } from "react";
 
// Criando o contexto para o tema
const ThemeContext = React.createContext();
 
// Componente que vai prover o contexto do tema
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado inicial do tema
 
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
 
  // Aplica o tema ao body da página
  document.body.className = theme;
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
 
// Hook personalizado para usar o contexto do tema
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};
 
// Componente que usa o hook personalizado useTheme para alternar o tema
const ThemeChanger = () => {
  const { theme, toggleTheme } = useTheme();
 
  return (
    <div className="theme-changer">
      <button onClick={toggleTheme}>Alterar Tema</button>
      <p>Tema atual: {theme}</p>
    </div>
  );
};
 
export { ThemeProvider, ThemeChanger };
 