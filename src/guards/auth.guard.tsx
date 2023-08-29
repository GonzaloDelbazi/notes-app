import { AppStore } from '../redux/store'
import { useSelector } from "react-redux"
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '../models/routes'

export const AuthGuard = () => {
    const userState = useSelector((store: AppStore) => store.authState.user)
    return userState.name ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN}/>
}

export default AuthGuard;