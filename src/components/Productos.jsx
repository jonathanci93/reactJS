import { NavLink } from "react-router-dom";
import productos from "../assets/productos.json";


const uniqueCategories = [...new Set(productos.map(p => p.category))];


const categoryNames = {
    proteinas: "Proteínas",
    creatinas: "Creatinas",
    aminoacidos: "Aminoácidos",
    masa: "Volumen / Masa",
};

const Productos = () => (
    <div className="container my-5">
        <div className="row">
            {uniqueCategories.map((category) => {
                const firstProduct = productos.find((p) => p.category === category);
                return (
                    <div key={category} className="col-md-3 text-center">
                        <NavLink to={`/category/${category}`} className="text-decoration-none text-dark">
                            {firstProduct && (
                                <img src={firstProduct.image} alt={categoryNames[category] || category} className="img-fluid"/>)}
                            <p>{categoryNames[category] || category}</p>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Productos;

