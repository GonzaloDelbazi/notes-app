import InitialView from "./initialView";
import { google, auth } from "../../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useField } from "../../hooks/index"
import apiUsers from "../../apis/users";
import { v4 as uuidv4 } from 'uuid';

const Initial = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mode, setMode] = useState<number>(0);
  const userName = useField({type: 'text'})
  const password = useField({type: 'password'})
  const name = useField({type: 'text'})
  const lastName = useField({type: 'text'})
  const email = useField({type: 'email'})

  const logIn = async () => {
    await signInWithPopup(auth, google)
      .then((resp) => {
        const userLogged = {
          name: resp.user.displayName,
          id: resp.user.uid,
          email: resp.user.email,
        };
        dispatch(createUser(userLogged));
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function handleUser(event: FormEvent) {
    event.preventDefault();
    const requestedUser = {
      email: email.value,
      password: password.value,
    }
    const resp = await apiUsers.customLogin(requestedUser)
    console.log(resp)
    if(resp) {
      const userLogged = {
        name:   resp.displayName,
        id:     resp.uid,
        email:  resp.email,
      }
      dispatch(createUser(userLogged));
      navigate("/home");
    }
  }

  async function handleNewUser(event: FormEvent) {
    event.preventDefault();
    const newUser = {
      name: `${name.value.trim()} ${lastName.value.trim()}`,
      email: email.value,
      password: password.value,
    }
    const resp = await apiUsers.customSignUp(newUser);
    if(resp) {
      const userLogged = {
        name:   resp.displayName,
        id:     resp.uid,
        email:  resp.email,
      }
      dispatch(createUser(userLogged));
      navigate("/home");
    }
  }

  return <InitialView 
            logIn={logIn} 
            handleUser={handleUser} 
            handleNewUser={handleNewUser} 
            mode={mode} 
            setMode={setMode} 
            userName={userName} 
            name={name} 
            lastName={lastName} 
            password={password} 
            email={email} 
          />;
};

export default Initial;
