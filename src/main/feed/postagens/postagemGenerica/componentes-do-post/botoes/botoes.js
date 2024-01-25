import './style.css';

function BotoesDoPost(props){
    return (
        <div class="post-bottom">
            <div class="barra-de-botoes">
                <button><ion-icon name="heart-outline"></ion-icon></button>
                <button><ion-icon name="chatbubble-outline"></ion-icon></button>
                <button><ion-icon name="paper-plane-outline"></ion-icon></button>
                <button><ion-icon name="bookmark-outline"></ion-icon></button>
            </div>

            <span class="pb-span">{props.mensagenzinha}</span>

            <div class="container-legenda">
                <a href=""><span class="post-bottom-nome pb-span">{props.name}</span></a>
                <span class="legenda pb-span">{props.legenda}</span>
            </div>

            <button><span class="comentarios pb-span">Ver todos os {props.numComments} comentários</span></button>

            <div class="container-barra-de-comentarios">
                <input class="comentario pb-span" type="text" placeholder="Adicione um comentário..."/>
                <button><ion-icon name="happy-outline"></ion-icon></button>
            </div>
        </div>
    );
}

export default BotoesDoPost;