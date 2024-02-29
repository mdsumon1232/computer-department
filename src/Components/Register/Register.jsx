import { getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../UserProvider/UserProvider";
import "./Register.css";

const auth = getAuth();
const storage = getStorage(app);

const Register = () => {
  const [profile, setProfile] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const handleProfileImage = (event) => {
    const file = event.target.files[0];
    setProfile(file);
  };

  const { createUser } = useContext(AuthContext);

  const handleRegisterData = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const fullName = form.fullName.value;
    const password = form.password.value;

    const imageRef = ref(storage, `images/ ${profile.name + v4()}`);
    uploadBytes(imageRef, profile, {
      contentType: "image/PNG",
    }).then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          setPhotoUrl(url);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    createUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        toast("Register successfully");
        emailVerify(userCredential.user);
        profileUpdate(userCredential.user, fullName, photoUrl);
      })
      .catch((error) => {
        console.error(error);
      });

    const emailVerify = (user) => {
      sendEmailVerification(user)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  const profileUpdate = (user, name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("update successfully");
      })

      .catch((error) => {
        console.log(error);
      });
  };

  console.log(photoUrl);

  return (
    <div className="register-container">
      <div className="register">
        <form className="register-form" onSubmit={handleRegisterData}>
          <h1>Create Account</h1>
          <label htmlFor="full-name"> Full Name: </label>
          <input type="text" name="fullName" placeholder="your name" />
          <br />
          <br />
          <label htmlFor="email"> E-mail: </label>
          <input type="text" name="email" placeholder="you@example.com" />
          <br />
          <br />
          <label htmlFor="roll">Roll:</label>
          <input type="number" name="roll" placeholder="579378" />
          <br />
          <br />
          <label htmlFor="Registration">Registration:</label>
          <input type="number" name="regi" placeholder="1502148155" />

          <br />
          <br />
          <div className="option-sector">
            <div className="semester">
              <label htmlFor="semester" className="select-label">
                Semester:
              </label>
              <select name="semester" id="">
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
              </select>
            </div>
            <div className="shift">
              <label htmlFor="shift" className="select-label">
                Shift:
              </label>
              <select name="shift">
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
              </select>
            </div>
          </div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <br />
          <br />
          <input type="file" onChange={handleProfileImage} required />

          <br />
          <br />

          <p className="have-account">
            Already have account ?
            <Link className="loginClick" to="/login">
              login
            </Link>
          </p>
          <button className="registerBtn">Create</button>
          <ToastContainer />
        </form>
      </div>
      <img src={profile} alt="" />
    </div>
  );
};

export default Register;
