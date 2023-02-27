import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "./Footer";
import Hero from "./Hero";
// import { useGetAllProductsQuery } from "../slices/productsApi";

const Home = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div>
    <div className="home-container">
      <Hero/>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
