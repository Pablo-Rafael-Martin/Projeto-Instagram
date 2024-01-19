function SugestaoGenerica(props) {
    if (props.tipo == 1){
        return (
        <div id="menu-direito-perfil-atual" class="sugestoes">
            <ion-icon name="person-circle-outline"></ion-icon>
            <div class="container-texto-top-texto-bottom">
                <span class="texto-top">plabomartin</span>
                <span class="texto-bottom">Pablo Rafael</span>
            </div>
            <button class="botao-mudar">Mudar</button>
        </div>
        );
    } else return (
        <div class="sugestoes">
            <ion-icon name="person-circle-outline"></ion-icon>  
            <div class="container-texto-top-texto-bottom">
                <span class="texto-top">{props.recomendação}</span>
                <span class="texto-bottom">{props.seSegue}</span>
            </div>
            <button class="botao-seguir">Seguir</button>
        </div>
    );
}

export default SugestaoGenerica;
