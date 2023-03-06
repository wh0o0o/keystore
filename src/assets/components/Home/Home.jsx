import "./Home.css";

import banner from "../../../assets/images/banner.png";

const Home = () => {
  return (
      <div className="banner">
          <img className="bannerimg" src={banner} alt="" />
      </div>
  );
};
export default Home;