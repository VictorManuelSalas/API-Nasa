import axios from "axios";

const apiKey = 'jJivNWVso17Hn94MKE1efqlLWEu7pFYN7pnRaOYF';
const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

//Tarea: Hcer que la funcion getData devolver el error
export const getDatas = async (query) => {
    return await axios.get(`${baseUrl}&i=${query}`)
}
export const getData = async (id) => {
    return await axios.get(`${baseUrl}&i=${id}`)
}
