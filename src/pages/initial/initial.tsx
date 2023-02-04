import InitialView from "./initialView";
import { google } from "../../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { createUser } from "../../redux/states/user";
import { redirect } from "react-router-dom";

const Initial = () => {

  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  console.log(store.getState().user)

  const logIn = async () => {
    console.log(user);
    const auth = getAuth();
    const result = await signInWithPopup(auth, google)
    .then((resp) => {
      setUser({name: resp.user.displayName, id: resp.user.uid, email: resp.user.email});
      dispatch(createUser(user));
      console.log(store.getState().user)
      redirect('/home')
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
