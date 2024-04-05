import { useState, useEffect } from "react"

import axios from "axios"

const useFetchBlogNamesDescriptionsAndDates = () => {
    const [blogNameDescriptionAndDate, setBlogNameDescriptionAndDate] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.post('http://localhost:3001/getNamesDescriptionsAndDates')

            try {
                if (res.data === "Error") {
                    alert("Something went wrong with our servers. Try again later.")
                } else {
                    setBlogNameDescriptionAndDate(res.data)
                    setIsLoading(false)
                }
            } catch (err) {
                console.error(err)
            }
        }

        fetchData()
    }, [])

    return { blogNameDescriptionAndDate, isLoading }
}

export default useFetchBlogNamesDescriptionsAndDates