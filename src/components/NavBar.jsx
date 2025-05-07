import React from 'react';
import { NavLink } from 'react-router-dom';
import productos from '../assets/productos.json';
import CartWidget from './CarWidget';
import Logo from './Logo';
// Extraemos categorías únicas
const categories = [...new Set(productos.map(p => p.category))];

// Opcional: nombres legibles
const categoryNames = {
    proteinas: 'Proteínas',
    creatinas: 'Creatinas',
    aminoacidos: 'Aminoácidos',
    masa: 'Volumen / Masa'
};

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand d-flex align-items-center" to="/">
                <Logo/>
                SuplementosSport
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {categories.map(cat => (
                        <li key={cat} className="nav-item">
                            <NavLink
                                to={`/category/${cat}`}
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                {categoryNames[cat] || cat}
                            </NavLink>
                        </li>
                    ))}
                    <li className="nav-item">
                        <NavLink to="/productos" className="nav-link">
                            Todos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link">
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar;
