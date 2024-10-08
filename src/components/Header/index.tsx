import './styles.css'
import homeIcon from '../../assets/Vector.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='de2-main-header'>
            <nav className='de2-container de2-header-nav'>

                <ul className='de2-pad0'>
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
                    <li><NavLink
                        className={({ isActive }: any) => isActive ? "de2-link-active" : "de2-link-not-active"}
                        to='/about' >
                        Sobre nós
                    </NavLink></li>
                </ul>

                <div className='de2-navbar-container'>
                    <NavLink to='/'>
                        <img src={homeIcon} alt="Home" />
                    </NavLink>

                </div>
            </nav>
        </header>
    )
}