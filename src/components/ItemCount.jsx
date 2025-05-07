import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1);

    const aumentarContador = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const decrementarContador = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className="container my-5">
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={decrementarContador}
                >
                    -
                </button>
                <button type="button" className="btn btn-warning">
                    {counter}
                </button>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={aumentarContador}
                >
                    +
                </button>
            </div>
            <div className="my-1">
                <button
                    className="btn btn-warning fw-bold"
                    onClick={() => {
                        onAdd(counter);
                    }}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;