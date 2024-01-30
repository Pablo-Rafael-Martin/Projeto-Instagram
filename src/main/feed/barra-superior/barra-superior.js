import './style.css';
import logo from '../../../Instagram-Logo.png';

function BarraSuperior() {
    return (
        <div id="BarraSuperior">
            <img src={logo}/>
            <input type="text" placeholder='&#xf002; Pesquisar' />
            <ion-icon name="heart-outline"></ion-icon>
        </div>
    );
}
export default BarraSuperior;