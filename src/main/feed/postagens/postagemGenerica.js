
function PostagemGenerica(props) {
    return (
        <div id="feed">         
            <div class="container-post">
                <div class="post-top">
                    <div class="container-esquerdo">
                        <a href="./video.mp4">
                            <div class="container-post-story">  
                                <div class="circular-landscape-container"><div class="circular-landscape"><img class="story-img" src={props.storyImg} /></div></div>
                            </div>
                        </a>
                        <span class="post-nome">{props.name}</span>
                        <span class="post-tempo">{props.postTemp}</span>
                    </div>
                    <div class="container-direito"><ion-icon class="icon-eho" name="ellipsis-horizontal-outline"></ion-icon></div>
                </div>

                <div class="post-imagem-do-post">
                    <img class="post-img" src={props.postImg} />
                </div>

                <div class="post-bottom">
                    <div class="container-post-bottom-barra-1">
                        <div class="post-bottom-esquerdo">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>

                        <div class="post-bottom-direito"><ion-icon name="bookmark-outline"></ion-icon></div>
                    </div>

                    <div class="post-bottom-seguido-por"><span class="pb-span">Seguido por {props.seguidoPor}</span></div>

                    <div class="container-legenda">
                        <span class="post-bottom-nome pb-span">{props.name}</span>
                        <span class="legenda pb-span">{props.legenda}</span>
                    </div>

                    <span class="comentarios pb-span">Ver todos os {props.numComments} comentários</span>

                    <div class="container-barra-de-comentarios">
                        <span class="comentario pb-span">Adicione um comentário...</span>
                        <ion-icon name="happy-outline"></ion-icon>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PostagemGenerica;