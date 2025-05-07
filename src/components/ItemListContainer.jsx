import productos from "../assets/productos.json"
import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import SpartaClub from "./SpartaClub";
import Banners from "./Banners";
import Servicio from "./Servicio";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000)
    })

    useEffect(() => {
        promesa.then(resultado => {
            setItems(id ? resultado.filter(item => item.category == id) : resultado);
        })
    }, [id])

    return (
        <>
            {!id ? <><SpartaClub />
            <Banners />
            <Servicio /></> : ""}
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer