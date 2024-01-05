import BarraDeStories from "./barra-de-stories/barra-de-stories.js";
import Postagens from "./postagens/postagens.js";
import "./feed.css"

function Feed() {
    return (
        <div class="feed">
            <BarraDeStories />
            <Postagens />
        </div>
    );
}

export default Feed;
//todo: carregar a barra de stories aqui