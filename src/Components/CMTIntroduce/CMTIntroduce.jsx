import cmt from "../../assets/cmt.jpg";
import "./CMTIntroduce.css";

const CMTIntroduce = () => {
  return (
    <div className="intro-container">
      <article className="article">
        <h2 className="intro-title">Welcome To Computer Department.</h2>
        <p className="intro-article">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, iste
          soluta error, sit provident delectus nemo aspernatur quo ipsa dolore
          officiis sequi voluptatem ratione. Itaque, quos! Ex deserunt ea
          incidunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Minus, iste soluta error, sit provident delectus nemo aspernatur quo
          ipsa dolore officiis sequi voluptatem ratione. Itaque, quos! Ex
          deserunt ea incidunt! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Minus, iste soluta error, sit provident delectus
          nemo aspernatur quo ipsa dolore officiis sequi voluptatem ratione.
          Itaque, quos! Ex deserunt ea incidunt! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Minus, iste soluta error, sit provident
          delectus nemo aspernatur quo ipsa dolore officiis sequi voluptatem
          ratione. Itaque, quos! Ex deserunt ea incidunt! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Minus, iste soluta error, sit
          provident delectus nemo aspernatur quo ipsa dolore officiis sequi
          voluptatem ratione. Itaque, quos! Ex deserunt ea incidunt! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit.
        </p>
      </article>
      <div className="cmt-img">
        <img src={cmt} alt="" />
      </div>
    </div>
  );
};

export default CMTIntroduce;
