
import power from './assets/Captura de tela de 2022-11-04 23-04-18.png';
import cyberpunkMansao from './assets/Cyberpunk 2077 mansão.jpeg';
import cyberpunkWallpaper from './assets/cyberpunk 2077 wallpaper.jpg';
import rebeccaDavid from './assets/cyberpunk rebecca e david.jpg';
import fullmetalWallpaper from './assets/Fullmetal wallpaper.jpg';
import genshin from './assets/genshin impact 1.jpg';
import umAnel from './assets/Lord-of-the-Rings-one-of-the-ring-close-up_1920x1080.jpg';
import paragon from './assets/paragonSerath-wallpaper-papel-de-parede.jpg';
import './barra-de-stories.css';
import StoryGenerico from './storyGenerico.js';

const nomeDoUsuario = ["power", "RafaelRoteirista", "cdEnjoyer", "oTristeza", "baixinho", "inimigoDaGrama", "abominavel", "Serath"];




function BarraDeStories() {
    return (
        <div id="barra-stories">    
            <StoryGenerico name={nomeDoUsuario[0]} img={power} />
            <StoryGenerico name={nomeDoUsuario[1]} img={cyberpunkMansao} />
            <StoryGenerico name={nomeDoUsuario[2]} img={cyberpunkWallpaper} />
            <StoryGenerico name={nomeDoUsuario[3]} img={rebeccaDavid} />
            <StoryGenerico name={nomeDoUsuario[4]} img={fullmetalWallpaper} />
            <StoryGenerico name={nomeDoUsuario[5]} img={genshin} />
            <StoryGenerico name={nomeDoUsuario[6]} img={umAnel} />
            <StoryGenerico name={nomeDoUsuario[7]} img={paragon} />
            
        </div>
    );
}

export default BarraDeStories;