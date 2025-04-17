import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PostPage() {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data)
                setLoading(false)
            })
    }, [])


    if (loading) {
        return <h1>Loading...</h1>
    }

    return <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </>


}