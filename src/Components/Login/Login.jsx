import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login_img from "../../assets/login-img.png";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../UserProvider/UserProvider";
import "./Login.css";

const Login = () => {
  const { setUser, login } = useContext(AuthContext);

  const auth = getAuth(app);

  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        toast("Login successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const resetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast("Please submit a email");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast("check your email");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <form className="form" onSubmit={handleLogin}>
          <h1>Login</h1>
          <label htmlFor="email"> Email: </label>
          <input
            type="text"
            name="email"
            ref={emailRef}
            placeholder="you@example.com"
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <span className="forgottenSpan">
            <button className="forgotten" onClick={resetPassword}>
              Forgotten password
            </button>
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
