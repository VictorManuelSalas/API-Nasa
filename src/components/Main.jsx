import React from 'react'
import { FaTeamspeak, FaGithub } from 'react-icons/fa';

const Main = () => {
    return (
        <div className='container m-auto p-5 '>
            <h2><FaTeamspeak /> Nasa Astronomical Picture of the Day</h2>
            <p>Desarrollado por: <a className='nav-link' href="https://github.com/VictorManuelSalas"><FaGithub /> Victor Manuel Nuñez Salas</a> </p>
            <p>API: <a href="https://api.nasa.gov">https://api.nasa.gov/planetary/apod</a> </p>
        </div>
    )
}

export default Main