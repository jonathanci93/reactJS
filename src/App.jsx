import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <>
    <NavBar/>
    <h1 className="title">Invictus Tienda</h1>
    <ItemListContainer greeting={"Productos 20% descuento en efectivo"} />
    </>
  )

}

export default App
