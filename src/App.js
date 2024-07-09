import React from 'react';
import { ThemeChanger } from './Theme';
 
function App() {
  return (
    <div className="App">
      <h1>Exemplo de troca de tema com useContext</h1>
      <ThemeChanger />
      <p>Conteúdo da aplicação</p>
    </div>
  );
}
 
export default App;