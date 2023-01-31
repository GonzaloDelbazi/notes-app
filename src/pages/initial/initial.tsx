import InitialView from "./initialView";
import { google } from "../../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { store } from "../../store";

const Initial = () => {
  
  const [user, setUser] = useState({});

  const logIn = async () => {
    console.log(user);
    const auth = getAuth();
    const result = await signInWithPopup(auth, google)
    .then((resp) => {
      store.dispatch({ type: "@user/seted" });
      setUser(resp.user);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  
  // Mover el logOut a otro lado no tiene sentido tenerlo aca
  const logOut = async () => {
    console.log(user);
    const auth = getAuth();
    const result = await auth
    .signOut()
    .then((resp) => {
      console.log("SESION CERRADA");
      store.dispatch({ type: "@user/deleted" });
    })
    .catch((err) => console.log(err));
  };


  return (
    <InitialView
      logIn={logIn} 
      logOut={logOut} 
    />
  )
};

export default Initial;
