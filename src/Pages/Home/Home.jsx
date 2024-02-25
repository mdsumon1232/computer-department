import Teachers from "../../Components/Teachers/Teachers";
import CMTIntroduce from "./../../Components/CMTIntroduce/CMTIntroduce";
import HeroArea from "./../../Components/HeroArea/HeroArea";
import Mission from "./../../Components/Mission/Mission";

const Home = () => {
  return (
    <div>
      <HeroArea />
      <CMTIntroduce />
      <Mission />
      <Teachers />
    </div>
  );
};

export default Home;
