import './Barra-lateral.css';
import logo from '../Instagram-Logo.png';
import Button from './button';


function BarraLateral() {
    const props = [
        { name: 'home', span: 'Página inicial' },
        { name: 'search-outline', span: 'Pesquisa' },
        { name: 'compass-outline', span: 'Explorar' },
        { name: 'film-outline', span: 'Reels' },
        { name: 'paper-plane-outline', span: 'Mensagens' },
        { name: 'heart-outline', span: 'Notificações' },
        { name: 'add-circle-outline', span: 'Criar' },
        { name: 'person-circle-outline', span: 'Perfil' },
        { name: 'at-outline', span: 'Threads' },
        { name: 'reorder-three-outline', span: 'Mais' },
    ];

    const botoes = [
        <Button name='' span='Página inicial'/>,
        <Button name='' span=''/>,
        <Button name='' span=''/>,
        <Button name='' span=''/>,
        <Button name='' span=''/>,
        <Button name='' span=''/>,
        <Button name='' span=''/>,
        <Button name='' span=''/>,
        <Button name='' span=''/>,
        <Button name='' span=''/>
    ];

    return(
        <div class='container-BarraLateral'>
            <ul class='BarraLateral'>
                <img src={logo} />
                {props.map((botoes) => <Button name={botoes.name} span={botoes.span} />)}
            </ul>
        </div> 
    )
}

export default BarraLateral;