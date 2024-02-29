import { Outlet, useNavigation } from "react-router-dom";
import Sping from "../Sping/Sping";
import Footer from "./../Footer/Footer";
import Header from "./../Header/Header";

const Primary = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      {navigation.state === "loading" ? <Sping /> : ""}
      <Outlet />

      <Footer />
    </div>
  );
};

export default Primary;
