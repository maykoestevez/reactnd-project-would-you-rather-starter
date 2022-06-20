import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>
            <h2>This page doesn't exists</h2>
            <Link to={'/'}>Please go to login</Link>
        </div>
    )
}