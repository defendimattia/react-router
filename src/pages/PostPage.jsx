import { useParams } from "react-router-dom"

export default function PostPage() {
    const { id } = useParams()

    return <h1>postpage {id}</h1>

}