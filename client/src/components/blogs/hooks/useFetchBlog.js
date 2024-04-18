import { useState, useEffect } from "react"

import axios from "axios"

const useFetchBlog = ({ blogName }) => {
    const [blog, setBlog] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const values = {
            name: blogName
        }

        const fetchData = async () => {
            const res = await axios.post("http://localhost:3001/getBlog", values)

            try {
                if (res.data === "Error") {
                    alert("Something went wrong with our servers. Try again later.")
                } else {
                    setBlog(res.data)
                    setIsLoading(false)
                }
            } catch (err) {
                console.error(err)
            }
        }

        fetchData()
    }, [blogName])

    return { blog, isLoading }
}

export default useFetchBlog