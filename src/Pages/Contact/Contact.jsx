import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rphsvs7", "template_abyutoc", form.current, {
        publicKey: "ZDUwy63wXQE_d9vKK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail} className="ContactForm">
        <h2 className="contact-title">Contact</h2>
        <label>Name : </label>
        <input type="text" name="user_name" />
        <br />
        <label>Email :</label>
        <input type="email" name="user_email" />
        <br />
        <label>Message :</label>
        <textarea name="message" />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
