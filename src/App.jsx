import React from 'react'

//Componentes
import CardNasa from './components/CardNasa'
import Header from './components/Header'
import Loading from './components/Loading'
import Main from './components/Main'


function App() {
  const [infoPlanet, setInfo] = React.useState([])
  React.useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const apiKey = 'MKitXb3KqyNPTrtZg4EWtD8v7XJalpxJmAjLzpwd'
    const data = await fetch('https://api.nasa.gov/planetary/apod?api_key=MKitXb3KqyNPTrtZg4EWtD8v7XJalpxJmAjLzpwd')
    const planet = await data.json()
    console.log(planet)
    setInfo(planet)
  }
  return (
    <div>
      <Header />
      <Main />
      <form className='container ps-5' >
        <fieldset>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Seleccione la Fecha:</label>
            <input type="date" id="date" className="form-control w-50" required />
          </div>
          <button type="submit" className="btn btn-primary">Buscar</button>
        </fieldset>
      </form>
      <Loading />
      <CardNasa title='Estado Unido' date='20-20-20' copyright='hola' explanation='ajhsdgfkhjasdgfcjkhasdgfjkhasdfv' url='../public/nasa.png' />
    </div>


  )
}

export default App
