import Logo from "./Logo"
import CartWidget from "./CarWidget";
const NavBar = () => {
    return (
        <div className="container-fluid p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                    <Logo />
                    </div>
                    <div className="col-md-10">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">En familia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Receta del Futuro</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-1 text-end">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;