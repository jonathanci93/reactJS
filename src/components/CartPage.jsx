// src/components/CartPage.jsx
import React, { useContext } from 'react';
import CartContext from './context/CartContext';

const CartPage = () => {
    const { cart, removeItem, clear } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="container mt-5">
                <h2>Tu carrito está vacío</h2>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2>Tu Carrito</h2>
            <ul className="list-group mb-3">
                {cart.map(item => (
                    <li
                        key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <span>
                            {item.title} × {item.quantity}
                        </span>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => removeItem(item.id)}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
            <button className="btn btn-secondary me-2" onClick={clear}>
                Limpiar carrito
            </button>
        </div>
    );
};

export default CartPage;
