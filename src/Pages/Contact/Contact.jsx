import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
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
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-top">
          <h3>CST , Tangail Polytechnic Institute</h3>
          <p>Phone: 01605647817</p>
          <p>Email: cst13@gmail.com</p>
          <p>Location: Dewla , Tangail Sadar , Tantail</p>
        </div>
        <div className="contact-bottom">
          <form ref={form} onSubmit={sendEmail} className="form">
            <h2>Send Message</h2>
            <label>Name : </label>
            <input type="text" name="user_name" placeholder="your name" />
            <br />
            <label>Email :</label>
            <input
              type="email"
              name="user_email"
              placeholder="example@gmail.com"
            />
            <br />
            <label>Message :</label>
            <textarea
              name="message"
              rows="10"
              cols="60"
              className="message-box"
            />
            <br />
            <input type="submit" value="Send" className="contactBtn" />
          </form>

          <div>
            <MapContainer
              center={[24.275709901630965, 89.92087919670753]}
              zoom={13}
              scrollWheelZoom={true}
              className="map"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[24.275709901630965, 89.92087919670753]}>
                <Popup>Tangail Polytechnic Institute</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
