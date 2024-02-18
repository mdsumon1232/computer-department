import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register">
        <form className="register-form">
          <h2>Create Account</h2>
          <label htmlFor="full-name"> Full Name: </label>
          <input type="text" placeholder="you@example.com" />
          <br />
          <br />
          <label htmlFor="roll">Roll:</label>
          <input type="number" placeholder="579378" />
          <br />
          <br />
          <label htmlFor="Registration">Registration:</label>
          <input type="number" placeholder="1502148155" />

          <br />
          <br />
          <div className="option-sector">
            <div className="semester">
              <label htmlFor="semester" className="select-label">
                Semester:
              </label>
              <select name="semester" id="">
                <option value="">1st</option>
                <option value="">2nd</option>
                <option value="">3rd</option>
                <option value="">4th</option>
                <option value="">5th</option>
                <option value="">6th</option>
                <option value="">7th</option>
                <option value="">8th</option>
              </select>
            </div>
            <div className="shift">
              <label htmlFor="shift" className="select-label">
                Shift:
              </label>
              <select name="shift" id="">
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
              </select>
            </div>
          </div>
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Enter your password" />

          <br />
          <br />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" placeholder="Enter your Confirm password" />

          <p className="have-account">
            Already have account ?
            <Link className="login" to="/login">
              login
            </Link>
          </p>
          <button className="loginBtn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
