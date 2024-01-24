import './postagens.css';
import PostagemGenerica from './postagemGenerica/postagemGenerica';
// Perfis
import power from "../barra-de-stories/assets/Captura de tela de 2022-11-04 23-04-18.png";
import abominável from '../barra-de-stories/assets/Lord-of-the-Rings-one-of-the-ring-close-up_1920x1080.jpg';  
import Serath from '../barra-de-stories/assets/paragonSerath-wallpaper-papel-de-parede.jpg'; 

// Imagem do post
import barrigudo from "../barra-de-stories/assets/barrigudo.png";
import oldMap from './assets/Paragon legacy 2.jpg';
import mordor from './assets/mordor.png';

function Postagens() {
    const promiseData = [
    {posterName: "power", posterImg: power, horarioDoPost: "22 h", imagemDoPost: barrigudo, mensagenzinha: "Seguido por _josernetoo", legenda: "GATO BARRIGUDO KKKKKKKKKK", comments: "", numComments: "20"},
    {posterName: "abominável", posterImg: abominável, horarioDoPost: "3 h", imagemDoPost: mordor, mensagenzinha: "Seguido por mithrandir", legenda: "Algum comentário sobre como posso decorar esse lugar?", comments: "", numComments: "666"},
    {posterName: "Serath", posterImg: Serath, horarioDoPost: "4 d", imagemDoPost: oldMap, mensagenzinha: "Curtido por Akalli", legenda: "Ô saudades desse mapa...", comments: "", numComments: "31"}
    ];
    
    return (
        <ul class="postagens-container">
            {promiseData.map(x => <PostagemGenerica 
            name = {x.posterName}
            storyImg = {x.posterImg}
            postTemp = {x.horarioDoPost}
            postImg = {x.imagemDoPost}
            mensagenzinha = {x.mensagenzinha}
            legenda = {x.legenda}
            numComments = {x.numComments}
            comments = {x.comments}
            />)}
        </ul>

    );
}

export default Postagens;