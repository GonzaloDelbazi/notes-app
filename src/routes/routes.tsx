import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import UserStatusBar from "../components/UserStatusBar/UserStatusBar";
import { AuthGuard } from "../guards";
import { PrivateRoutes, PublicRoutes } from "../models/routes";
import HomePage from "../pages/home/home";
import AuthLoading from "../pages/AuthLoading/authLoading";
import Initial from "../pages/initial/initial";
import { AppStore } from "../redux/store";

export const Rutas = () => {
    const {user, userStatusLoading} = useSelector((store: AppStore) => store.authState);

    if(userStatusLoading) {
        return <AuthLoading></AuthLoading>
    }
        return (
        <>
            { user.id ?
            <>
                <UserStatusBar></UserStatusBar>
                <Routes>
                    <Route element={<AuthGuard />}>
                    <Route path="/" element={<Navigate  to={PrivateRoutes.HOME}/>} />
                    <Route path="*" element={<Navigate  to={PrivateRoutes.HOME}/>} />
                    <Route path={PrivateRoutes.HOME} element={<HomePage />} />
                    </Route>
                </Routes>
            </>
            :
            <Routes>
                <Route path="/" element={<Navigate  to={PublicRoutes.LOGIN}/>} />
                <Route path="*" element={<Navigate  to={PublicRoutes.LOGIN}/>} />
                <Route path={PublicRoutes.LOGIN} element={<Initial />} />
            </Routes>
            }
        </>
    )
    }

export default Rutas;