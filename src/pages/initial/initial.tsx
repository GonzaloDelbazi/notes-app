import InitialView from "./initialView";
import { google } from "../../firebase-config";
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
    const auth = getAuth();
    const result = await signInWithPopup(auth, google)
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
      userName: userName.value,
      password: password.value,
    }
    const resp = await apiUsers.loginUser(requestedUser);
    if(resp.length) {
      const userLogged = {
        name:   resp[0].userName,
        id:     resp[0].id,
        email:  resp[0].email,
      }
      dispatch(createUser(userLogged));
      navigate("/home");
    }
  }

  async function handleNewUser(event: FormEvent) {
    event.preventDefault();
    const newUserId = uuidv4()
    const newUser = {
      userName: userName.value,
      name: `${name.value.trim()} ${lastName.value.trim()}`,
      email: email.value,
      password: password.value,
      id: newUserId
    }
    const resp = await apiUsers.post(newUser);
    if(resp) {
      const userLogged = {
        name:   userName.value,
        id:     newUserId,
        email:  email.value,
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
