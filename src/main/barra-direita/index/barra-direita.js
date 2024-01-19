import './barra-direita.css';
import SugestaoGenerica from '../sugestoes-genericas/sugestoes-genericas';

const recomendação = ["mithrandir", "curunir", "Aiwendil", "Alatar", "pallando"];
const seSegue = "Segue você";

function BarraDireita() {
    return (
    <div id="menu-direito">                     
        <SugestaoGenerica tipo = "1" />

        <div id="sugestoes-para-voce" class="sugestoes">
            <span class="sugestoes-para-voce">Sugestões para você</span>
            <button class="botao-ver-tudo">Ver tudo</button>
        </div>

        <div id="container-sugestoes">
            <SugestaoGenerica recomendação = {recomendação[0]} seSegue = {seSegue} />
            <SugestaoGenerica recomendação = {recomendação[1]} seSegue = {seSegue} />
            <SugestaoGenerica recomendação = {recomendação[2]} seSegue = {seSegue} />
            <SugestaoGenerica recomendação = {recomendação[3]} seSegue = {seSegue} />
            <SugestaoGenerica recomendação = {recomendação[4]} seSegue = {seSegue} />
        </div>
    </div>
    );
}

export default BarraDireita;


