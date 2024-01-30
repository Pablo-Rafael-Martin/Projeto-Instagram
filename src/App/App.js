import './App.css';
import BarraLateral from '../barra-lateral/Barra-lateral.js';
import BarraSuperior from '../barra-superior/barra-superior.js'
import Main from '../main/main.js';
import { useState, useEffect } from 'react';


function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Adiciona um ouvinte de redimensionamento
    window.addEventListener('resize', handleResize);

    // Remove o ouvinte quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]); // Agora, handleResize será chamado sempre que screenWidth for atualizado

  return (
    <div class="app">
      {screenWidth > 768 ? <BarraLateral /> : <BarraSuperior />}
      <Main />

    </div>
  );
}

export default App;
