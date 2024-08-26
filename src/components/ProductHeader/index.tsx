import { NavLink } from 'react-router-dom';
import './styles.css';

export default function ProductHeader() {
    return (
        <div className='de2-container' id='de2-product-menu'>
            <nav className='de2-product-nav de2-header-nav'>
                <ul className='de2-pad20'>
                    <li>
                        <NavLink
                            className={({ isActive }: any) => isActive ? "de2-link-active" : "de2-link-not-active"}
                            to='computers'
                        >
                            Computadores
                        </NavLink>
                    </li>
                    <li><NavLink
                        className={({ isActive }: any) => isActive ? "de2-link-active" : "de2-link-not-active"}
                        to='electronics' >
                        Eletrônicos
                    </NavLink></li>
                    <li><NavLink
                        className={({ isActive }: any) => isActive ? "de2-link-active" : "de2-link-not-active"}
                        to='books' >
                        Livros
                    </NavLink></li>
                </ul>
            </nav>
        </div>
    )
}