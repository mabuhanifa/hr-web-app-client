import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
    let auth = {'token':true}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}
