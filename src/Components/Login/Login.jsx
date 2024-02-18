import { Link } from "react-router-dom";
import login_img from "../../assets/login-img.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <form className="form">
          <h2>Login</h2>
          <label htmlFor="email"> Email: </label>
          <input type="text" placeholder="you@example.com" />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Enter your password" />
          <span className="forgottenSpan">
            <a className="forgotten" href="">
              Forgotten password
            </a>
          </span>
          <p className="no-account">
            Have no account ?{" "}
            <Link className="create-account" to="/register">
              create account
            </Link>
          </p>
          <button className="loginBtn">Login</button>
        </form>
        <div className="login-img">
          <img src={login_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
