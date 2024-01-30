import BarraDeStories from "./barra-de-stories/barra-de-stories.js";
import Postagens from "./postagens/postagens.js";
import BarraSuperior from "./barra-superior/barra-superior.js";
import "./feed.css"
import {useState, useEffect} from "react";

function Feed() {
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
        <div class="feed">
            {screenWidth < 768 ? <BarraSuperior /> : null}
            <BarraDeStories />
            <Postagens />
        </div>
    );
}

export default Feed;