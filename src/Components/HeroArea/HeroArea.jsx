import heroImg from "../../assets/heroImage.png";
import "./HeroArea.css";

const HeroArea = () => {
  return (
    <div className="hero-container">
      <div className="text">
        <div className="hero-text">
          <h1>Welcome to Computer Department</h1>
          <h2>Tangail polytechnic Institute</h2>
        </div>
      </div>
      <div className="heroImage">
        <img src={heroImg} alt="" />
      </div>
      <div className="blank"> </div>
    </div>
  );
};

export default HeroArea;
