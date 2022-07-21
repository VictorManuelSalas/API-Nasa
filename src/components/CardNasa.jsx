import React from 'react'

const CardNasa = ({ date, explanation, title, url }) => {
    return (
        <div className='container p-5'>
            <div className="card">
                <h5 className="card-title m-auto">Saturno Estelar</h5>
                <img src="https://concepto.de/wp-content/uploads/2020/03/saturno-e1585016761130.jpg" className="card-img-bottom"  />
                <div className="card-body">
                    <p className="card-text">04-10-2021</p>
                    <p className="card-text">Lorem ipsum es el texto que se usa habitualmente en diseño gráfico o de moda en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.</p>
                </div>
            </div>
        </div>

    )
}

export default CardNasa