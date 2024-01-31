import './style.css';
import fotoDePerfil from '../foto-de-perfil.jpg';

function BarraInferior() {
    return (
        <div id='BarraInferior'>
            <nav>
                <ul>
                    <li>
                        <button>
                            <i class="fa-solid fa-house"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="fa-regular fa-compass"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="fa-solid fa-film"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="fa-regular fa-square-plus"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="fa-regular fa-paper-plane"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={fotoDePerfil}/>
                        </button>
                    </li>

                    
                </ul>
            </nav>
        </div>
    );
}

export default BarraInferior;