import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "./Footer";
import HomeMiddle from "./homeMiddle";

const Home = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
    <div className="home-container">
      <HomeMiddle/>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
