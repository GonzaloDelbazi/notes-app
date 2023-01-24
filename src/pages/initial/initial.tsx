import "./initial.scss";

const InitialPage = () => {
  return (
    <>
      <div className="content">
        <div className="content-menu">
          <div className="title-box">
            <h1 className="title-initial-page">Notes App</h1>
          </div>
          <div className="initial-boxes">
            <div className="login-box pointer">
              <h1>Login</h1>
            </div>
            <div className="sign-box pointer">
              <h1>Sign in</h1>
            </div>
          </div>
        </div>
        <div className="content-animation"></div>
      </div>
    </>
  );
};

export default InitialPage;
