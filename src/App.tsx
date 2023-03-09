
import HomePage from "./pages/home/home";
import Initial from "./pages/initial/initial";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import { AuthGuard } from "./guards";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {!store.getState().user.id ? (
              <>
              <Route path="/" element={<Navigate  to={PublicRoutes.LOGIN}/>} />
              <Route path="*" element={<>NOT FOUND</>} />
              <Route path={PublicRoutes.LOGIN} element={<Initial />} />
              </>
            ) : (
              <Route element={<AuthGuard />}>
              <Route path="/" element={<Navigate  to={PrivateRoutes.HOME}/>} />
              <Route path="*" element={<>NOT FOUND</>} />
              <Route path={PrivateRoutes.HOME} element={<HomePage />} />
            </Route>
            )
            }
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
