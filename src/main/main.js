import './main.css';
import Feed from './feed/feed';
import BarraDireita from './barra-direita/barra-direita';

function Main() {
    return (
        <main class="main">
            <Feed />
            <BarraDireita />
        </main>
    );
}

export default Main;