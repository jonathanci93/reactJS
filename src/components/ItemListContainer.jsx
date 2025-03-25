const ItemListContainer = ({greeting}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className="text-center display-3">{greeting}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer