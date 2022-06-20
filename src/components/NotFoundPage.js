import { Navigate } from "react-router-dom"

export default function  NotFoundPage () {
    return (
        <div>
            <h2>This page doesn't exists</h2>
            <h3>Please go to login</h3>
            <Navigate to={'/'}>Login</Navigate>
        </div>
    )
}