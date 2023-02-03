import InitialView from "./initialView";
import { google } from "../../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { store } from "../../redux/store";

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


  return (
    <InitialView
      logIn={logIn} 
      logOut={()=> console.log('hola')} 
    />
  )
};

export default Initial;
