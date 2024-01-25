import './style.css';

function PostTop(props) {
    return (
        <div class="post-top">
            <a href="">
                <div class="container-esquerdo">
                    <a href="./video.mp4">
                        <div class="container-post-story">  
                            <div class="circular-landscape-container"><div class="circular-landscape"><img class="story-img" src={props.storyImg} /></div></div>
                        </div>
                    </a>
                    <span class="post-nome">{props.name}</span>
                    <span class="post-tempo">{props.postTemp}</span>
                </div>
            </a>
            <button><ion-icon class="icon-eho" name="ellipsis-horizontal-outline"></ion-icon></button>
        </div>
    );
}

export default PostTop;