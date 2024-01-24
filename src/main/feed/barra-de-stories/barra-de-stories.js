
import power from './assets/Captura de tela de 2022-11-04 23-04-18.png';
import cyberpunkMansao from './assets/Cyberpunk 2077 mansão.jpeg';
import cyberpunkWallpaper from './assets/cyberpunk 2077 wallpaper.jpg';
import rebeccaDavid from './assets/cyberpunk rebecca e david.jpg';
import fullmetalWallpaper from './assets/Fullmetal wallpaper.jpg';
import genshin from './assets/genshin impact 1.jpg';
import umAnel from './assets/Lord-of-the-Rings-one-of-the-ring-close-up_1920x1080.jpg';
import paragon from './assets/paragonSerath-wallpaper-papel-de-parede.jpg';
import './barra-de-stories.css';
import StoryGenerico from './storyGenerico/storyGenerico.js';




function BarraDeStories() {
    const promiseData = [
    { name: "power", img: power},
    { name: "RafaelRoteirista", img: cyberpunkMansao},
    { name: "cdEnjoyer", img: cyberpunkWallpaper},
    { name: "oTristeza", img: rebeccaDavid},
    { name: "baixinho", img: fullmetalWallpaper},
    { name: "inimigoDaGrama", img: genshin},
    { name: "abominável", img: umAnel},
    { name: "Serath", img: paragon}
];
    return (
        <div id="barra-stories">    
            {promiseData.map( x => <StoryGenerico name={x.name} img={x.img}/>)}            
        </div>
    );
}

export default BarraDeStories;