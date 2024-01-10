import './Barra-lateral.css';
import logo from '../Instagram-Logo.png';

function BarraLateral() {
    return(
        <div class='container-BarraLateral'>
            <ul class='BarraLateral'>
                <img src={logo} />
                <li>
                    <button>
                        <ion-icon name="home"></ion-icon>
                        <span>Página inicial</span>
                    </button>
                </li>
                <li>
                    <button>
                        <ion-icon name="search-outline"></ion-icon>
                        <span>Pesquisa</span>
                    </button>
                </li>
                <li>
                    <button>
                        <ion-icon name="compass-outline"></ion-icon>
                        <span>Explorar</span>
                    </button>
                </li>
                <li>
                    <button>
                        <ion-icon name="film-outline"></ion-icon>
                        <span>Reels</span>
                    </button>
                </li>
                <li>
                    <button>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <span>Mensagens</span>
                    </button>
                </li>
                <li>
                    <button>
                        <ion-icon name="heart-outline"></ion-icon>
                        <span>Notificações</span>
                    </button>
                </li>
                <li>
                    <button>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <span>Criar</span>
                    </button>
                </li>
                <li>
                    <button>
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <span>Perfil</span>
                    </button>
                </li>
                <li>
                    <button>
                        <ion-icon name="at-outline"></ion-icon>
                        <span>Threads</span>
                    </button>
                </li>
                <li>
                    <button>
                        <ion-icon name="reorder-three-outline"></ion-icon>
                        <span>Mais</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default BarraLateral;