import { useState } from 'react'
import CardNasa from './components/cardNasa'
import Header from './components/Header'
import Main from './components/Main'

function App() {

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

      <CardNasa />
    </div>


  )
}

export default App
