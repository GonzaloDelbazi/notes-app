import InitialView from "./initialView";
import { google, auth } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { createUser, setUserStatusLoading } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useField } from "../../hooks/index"
import apiUsers from "../../apis/users";
import { UserStorage } from "../../storage/userStorage";

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
        dispatch(createUser(userLogged))
        UserStorage.setUserStorage(userLogged);
        dispatch(setUserStatusLoading(true));
        goHome();
      }).catch((err) => {
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
    if(resp) {
      const userLogged = {
        name:   resp.displayName,
        id:     resp.uid,
        email:  resp.email,
      }
      const saveUser = new Promise((resolve, reject) => {
        resolve(dispatch(createUser(userLogged)))
        reject("Error no se pudo guardar usuario en redux")
      });
      saveUser.then(goHome)
      .catch(err => console.log(err))
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

  function goHome() {
    navigate("/home");
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
