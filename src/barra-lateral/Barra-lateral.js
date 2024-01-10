import './Barra-lateral.css';
import logo from '../Instagram-Logo.png';
import Pesquisa from './pesquisa/pesquisa';

function BarraLateral() {
    return(
        <div class='container-BarraLateral'>
            <ul class='BarraLateral'>
                <img src={logo} />
                <li>
                    <ion-icon name="home"></ion-icon>
                    <span>Página inicial</span>
                </li>
                <li>
                    <ion-icon name="search-outline"></ion-icon>
                    <span>Pesquisa</span>
                </li>
                <li>
                    <ion-icon name="compass-outline"></ion-icon>
                    <span>Explorar</span>
                </li>
                <li>
                    <ion-icon name="film-outline"></ion-icon>
                    <span>Reels</span>
                </li>
                <li>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <span>Mensagens</span>
                </li>
                <li>
                    <ion-icon name="heart-outline"></ion-icon>
                    <span>Notificações</span>
                </li>
                <li>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <span>Criar</span>
                </li>
                <li>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <span>Perfil</span>
                </li>
                <li>
                    <ion-icon name="at-outline"></ion-icon>
                    <span>Threads</span>
                </li>
                <li>
                    <ion-icon name="reorder-three-outline"></ion-icon>
                    <span>Mais</span>
                </li>
            </ul>
        </div>
    )
}

export default BarraLateral;