import './menu.css'
import {Link} from 'react-router-dom'

function Menu() {
    return(
        <div className='menu-container'>
            <ul className='menu'>
                <li className='item'>
                    <Link className='link' to='/'>Autora</Link>
                </li>
                <li className='item'>
                    <Link className='link' to='/diario'>Diário</Link>
                </li>
                <li className='item'>
                    <Link className='link' to='/portifolio'>Portfólio</Link>
                </li>
                <li className='item'>
                    <Link className='link' to='/comentarios'>Comentários</Link>
                </li>
                <li className='item'>
                    <Link className='link' to='/contatos'>Contatos</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu