import './barra-direita.css';
import '../sugestoes-genericas/sugestoes-genericas.css';
import SugestaoGenerica from '../sugestoes-genericas/sugestoes-genericas';

function BarraDireita() {
    const sugestao = [
        {nome: "mitrandir", seSegue: "Segue você"},
        {nome: "curunir", seSegue: "Segue você"},
        {nome: "Aiwendil", seSegue: "Segue você"},
        {nome: "Alatar", seSegue: "Segue você"},
        {nome: "pallando", seSegue: "Segue você"}
    ]

    return (
    <div id="menu-direito">                     
        <SugestaoGenerica tipo = "1" />

        <div id="sugestoes-para-voce" class="sugestoes">
            <span class="sugestoes-para-voce">Sugestões para você</span>
            <button class="botao-ver-tudo">Ver tudo</button>
        </div>

        <div id="container-sugestoes">
            {sugestao.map(x => <SugestaoGenerica recomendação={x.nome} seSegue={x.seSegue} />)}
        </div>
    </div>
    );
}

export default BarraDireita;


