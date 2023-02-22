import InitialView from "./initialView";
import { google } from "../../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { createUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";

const Initial = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return <InitialView logIn={logIn} logOut={() => console.log("hola")} />;
};

export default Initial;
