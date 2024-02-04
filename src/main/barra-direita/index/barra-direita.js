import './barra-direita.css';
import '../sugestoes-genericas/sugestoes-genericas.css';
import SugestaoGenerica from '../sugestoes-genericas/sugestoes-genericas';
import mithrandir from '../../../imagens/mithrandir.jpg';
import saruman from '../../../imagens/saruman.jpg';
import alatar from '../../../imagens/alatar.jpg';
import pallando from '../../../imagens/pallando.jpg';
import radagast from '../../../imagens/radagast.jpg';

function BarraDireita() {
    const sugestao = [
        {nome: "mitrandir", seSegue: "Segue você", img: mithrandir},
        {nome: "curunir", seSegue: "Segue você", img: saruman},
        {nome: "Aiwendil", seSegue: "Segue você", img: radagast},
        {nome: "Alatar", seSegue: "Segue você", img: alatar},
        {nome: "pallando", seSegue: "Segue você", img: pallando}
    ]

    return (
    <div id="menu-direito">                     
        <SugestaoGenerica tipo = "1" />

        <div id="sugestoes-para-voce" class="sugestoes">
            <span class="sugestoes-para-voce">Sugestões para você</span>
            <button class="botao-ver-tudo">Ver tudo</button>
        </div>

        <div id="container-sugestoes">
            {sugestao.map(x => <SugestaoGenerica recomendação={x.nome} seSegue={x.seSegue} img={x.img} />)}
        </div>
    </div>
    );
}

export default BarraDireita;


