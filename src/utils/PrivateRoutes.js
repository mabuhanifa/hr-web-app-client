import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
    let auth = {'token':false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}
