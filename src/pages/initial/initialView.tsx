import { ChangeEventHandler, FormEvent } from "react";
import google from "../../assets/googleSignIn/btn_google_signin_dark_normal_web.png";
import "./initial.scss";

interface InitialProps {
  logIn:<Promise> () => void,
  handleUser:<Promise> (value: FormEvent) => void,
  handleNewUser:<Promise> (value: FormEvent) => void,
  setMode:(value: number) => void,
  userName: useFieldType,
  name: useFieldType,
  lastName: useFieldType,
  password: useFieldType,
  email: useFieldType,
  mode:number
}

interface useFieldType {
  value: string,
  type: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InitialView = ({ logIn, handleUser, handleNewUser, mode, setMode, userName, name, lastName, password, email }: InitialProps) => {

  function modeSelected() {
    if(mode === 0) {
      return (
        <>
          <div className="initial-boxes">
            <div onClick={() => setMode(1) } className="login-box pointer">
              <h1>Login</h1>
            </div>
            <div onClick={() => setMode(2)} className="sign-box pointer">
              <h1>Sign in</h1>
            </div>
          </div>
        </>
      ) 
    } else if(mode === 1) {
      return (
        <>
          <div className="form-login">
            <form onSubmit={handleUser}>
              <input 
                {...userName}
                name={"UserName"}
                placeholder={"Usuario"}
              />
              <input 
                {...password}
                name={"Password"}
                placeholder={"Contraseña"}
              />
              <button 
                className="button-form"
                onClick={() => console.log('Iniciando Sesion')}
              >
                Iniciar Sesión
              </button>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img className="google-img" src={google} alt="Sign In with Google" onClick={() => logIn()} />
                <p>¿No tienes cuenta? <a href="#" onClick={() => setMode(3)}> Registrate!</a></p>      
              </div>
            </form>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="form-register">
            <form onSubmit={handleNewUser}>
                <input 
                  {...userName}
                  name={"UserName"}
                  placeholder={"UserName"}
                />
              <div style={{display: 'flex', alignItems: 'center'}}>
                <input 
                  {...name}
                  name={"name"}
                  placeholder={"Nombre"}
                />
                <input 
                  {...lastName}
                  name={"LastName"}
                  placeholder={"Apellido"}
                />                
              </div>
            <input 
                {...email}
                name={"Email"}
                placeholder={"Email"}
              />
              <input 
                {...password}
                name={"Password"}
                placeholder={"Contraseña"}
              />
              <button 
                className="button-form"
                onClick={() => handleNewUser}
              >
                Registrarse
              </button>
              <p>¿Posees una cuenta?<a href="#" onClick={() => setMode(1)}> Iniciar Sesion</a></p>
            </form>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className="content">
        <div className="content-menu">
          <div className="title-box">
              <h1 className="title-initial-page">Notes App</h1>
          </div>
          {
            modeSelected()
          }
        </div>
        <div className="content-animation">
          <div className="black-hole">
            <div className="note-blue-1"></div>
            <div className="note-red-1"></div>
            <div className="note-blue-2"></div>
            <div className="note-red-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialView;
