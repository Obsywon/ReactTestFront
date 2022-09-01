import {useContext} from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';
import "../styles/Components/Card.css";

function Card({title, text}) {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? 'darkContainer card' : 'lightContainer card'}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Card;