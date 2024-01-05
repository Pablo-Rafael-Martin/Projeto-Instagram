import './postagens.css';
import power from "../barra-de-stories/assets/Captura de tela de 2022-11-04 23-04-18.png";
import barrigudo from "../barra-de-stories/assets/barrigudo.png";
import PostagemGenerica from './postagemGenerica';

const posterImg = power;
const posterName = "power";
const horarioDoPost = "22h";
const imagemDoPost = barrigudo;
const seguidoPor = "_josernetoo";
const legenda = "GATO BARRIGUDO KKKKKKKKKKKK";
const comments = "";
const numComments = "20"


function Postagens() {
    return (
        <div class="postagens-container">
            <PostagemGenerica 
            storyImg = {posterImg}
            name = {posterName}
            postTemp = {horarioDoPost}
            postImg = {imagemDoPost}
            seguidoPor = {seguidoPor}
            legenda = {legenda}
            numComments = {numComments}
            comments = {comments}
            />
        </div>
    );
}

export default Postagens;