import "./storyGenerico.css";

function StoryGenerico (props){
    return (
        <div class="story">
            <a href="./video.mp4" target="_blank">
                <div class="circular-landscape-container"><div class="circular-landscape"><img class="story-img" alt='' src={props.img} /></div></div>
                <span>{props.name}</span>
            </a>
        </div>
    );
}

export default StoryGenerico;