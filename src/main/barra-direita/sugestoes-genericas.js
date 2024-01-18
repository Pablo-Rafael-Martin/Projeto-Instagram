function SugestaoGenerica(props) {
    return (
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
