import React from "react"

const CardNasa = (data) => {

return (
    <div className='container p-5'>
        <div className="card">
            <h5 className="p-5 card-title center ">{data.title}</h5>
            <img src={data.url} className="card-img-bottom" alt={data.title}/>
            <div className="card-body">
                <p className="card-text">{data.copyright}</p>
                <p className="card-text">{data.date}</p>
                <p className="card-text">{data.explanation}</p>
            </div>
        </div>
    </div>

)
}

export default CardNasa