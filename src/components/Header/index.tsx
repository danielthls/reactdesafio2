import './styles.css'
import homeIcon from '../../assets/Vector.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='de2-main-header'>
            <nav className='de2-container de2-header-nav'>

                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }: any) => isActive ? "de2-link-active" : "de2-link-not-active"}
                            to='/'
                            end>
                            Início
                        </NavLink>
                    </li>
                    <li><NavLink
                        className={({ isActive }: any) => isActive ? "de2-link-active" : "de2-link-not-active"}
                        to='/products' >
                        Produtos
                    </NavLink></li>
                    <li>Sobre Nós</li>
                </ul>

                <div className='de2-navbar-container'>
                    <img src={homeIcon} alt="Home" />
                </div>
            </nav>
        </header>
    )
}