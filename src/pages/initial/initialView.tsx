import "./initial.scss";

interface InitialProps {
  logOut:<Promise> () => void,
  logIn:<Promise> () => void,
  
}

const InitialView = ({ logIn, logOut }: InitialProps) => {

  return (
    <>
      <div className="content">
        <div className="content-menu">
          <div className="title-box">
            <h1 className="title-initial-page">Notes App</h1>
          </div>
          <div className="initial-boxes">
            <div className="login-box pointer">
              <h1 onClick={() => logIn()}>Login</h1>
            </div>
            <div className="sign-box pointer">
              <h1 onClick={() => logOut()}>Sign in</h1>
            </div>
          </div>
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
