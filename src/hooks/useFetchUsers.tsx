import { useState, useEffect } from "react"

const useFetch = (url: string) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchResources = async () => {
            try {
                let res = await fetch(url);
                let data = await res.json()
                setData(data)
            } catch (error: unknown) {
                console.log(error)
            }
        }
        fetchResources()
    }, [url])
    return { data }
}

export default useFetch