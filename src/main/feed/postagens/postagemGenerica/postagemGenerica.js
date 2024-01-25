import './style.css';
import PostTop from './componentes-do-post/barra-superior/post-top';
import BotoesDoPost from './componentes-do-post/botoes/botoes';

function PostagemGenerica(props) {
    return (
        <li>
            <div class="container-post">
                <PostTop storyImg={props.storyImg} name={props.name} postTemp={props.postTemp}/>
                <img class="post-img" src={props.postImg} />
                <BotoesDoPost mensagenzinha={props.mensagenzinha} name={props.name} legenda={props.legenda} numComments={props.numComments}/>
                
            </div>
        </li>

    );
}

export default PostagemGenerica;