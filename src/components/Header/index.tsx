import './styles.css'
import homeIcon from '../../assets/Vector.png'

export default function Header() {
    return (<header>
        <nav className='de2-container de2-header-nav'>

            <ul>
                <li>Início</li>
                <li>Produtos</li>
                <li>Sobre Nós</li>
            </ul>

            <div className='de2-navbar-container'>
                <img src={homeIcon} alt="Home" />
            </div>
        </nav>
    </header>
    )
}