import { useState, useEffect } from "react";

import HomePage from "./pages/home/home";
import Initial from "./pages/initial/initial";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Route, Routes, redirect, BrowserRouter } from "react-router-dom";
import { auth } from "./firebase-config";
import { PrivateRoutes, PublicRoutes } from "./models/routes";

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        return redirect("/home");
      } else {
        setIsAuth(false);
        return redirect("/");
      }
    });
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={PublicRoutes.LOGIN} element={<Initial />} />
            <Route path="*" element={<>NOT FOUND</>} />
            <Route path={PrivateRoutes.HOME} element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
