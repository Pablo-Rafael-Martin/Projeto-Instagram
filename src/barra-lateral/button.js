
function Button(props) {
    return(
        <li className={props.name}>
            <button>
                <ion-icon name={props.name}></ion-icon>
                <span>{props.span}</span>
            </button>
        </li>
    );
}

export default Button;