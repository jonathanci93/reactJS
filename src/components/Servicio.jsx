import React from 'react';

const Servicio = () => {
    return (
        <div className="container">
            <div className="row gx-3">
                <div className="col-md-4">
                    <img
                        src="https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d14290d9454ed59c224b_course-thumb-bjj-bw.webp"
                        alt="BJJ"
                        className="img-fluid mb-2"
                    />
                    <h2 className="fs-4">
                        BJJ para aquellos que quieran incursionar en el arte de la sumisión
                    </h2>
                </div>
                <div className="col-md-4">
                    <img
                        src="https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d1505bee8daebae0167c_course-thumb-boxen-bw.webp"
                        alt="Boxeo"
                        className="img-fluid mb-2"
                    />
                    <h2 className="fs-4">
                        Boxeo para aquellos que quieran enfrentar a sus enemigos de forma directa
                    </h2>
                </div>
                <div className="col-md-4">
                    <img
                        src="https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d11cbf8f3379cdb4a165_course-thumb-recovery-bw.webp"
                        alt="Recuperación"
                        className="img-fluid mb-2"
                    />
                    <h2 className="fs-4">
                        Contamos con recuperación para que al finalizar tu semana puedas volver el lunes con todo!
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Servicio;
