
import HomePage from "./pages/home/home";
import Initial from "./pages/initial/initial";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter, Navigate, useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import { AuthGuard } from "./guards";
import { auth } from "./firebase-config";
import { createUser } from "./redux/states/user";

const App = () => {
    

  if(auth.currentUser) {
    const userLogged = {
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,
      email: auth.currentUser.email,
    };
    console.log(userLogged)
    store.dispatch(createUser(userLogged))
  }


  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate  to={PrivateRoutes.HOME}/>} />
            <Route path="*" element={<>NOT FOUND</>} />
            <Route path={PublicRoutes.LOGIN} element={<Initial />} />
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.HOME} element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
