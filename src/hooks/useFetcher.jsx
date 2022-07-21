import { useEffect, useState } from "react";
import { getDatas } from "../utils/getData";


const useFetcher = (query = 'jJivNWVso17Hn94MKE1efqlLWEu7pFYN7pnRaOYF') => {

    const [dataState, setDataState] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        const { data } = await getDatas(query)
        if (data.Response !== 'False') {
            setDataState(data.Search)
        } else {
            setDataState([])
        }
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [query])

    return { dataState, loading }
}

export default useFetcher
