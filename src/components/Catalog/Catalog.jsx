import { Link } from "react-router-dom";

import "./Catalog.css";
import search from "../../assets/images/search.svg";
import Image1 from "../../assets/images/ds.png";
import Image2 from "../../assets/images/bs1.png";
import Image3 from "../../assets/images/bs2.png";
import Image4 from "../../assets/images/nms.png";

const Catalog = () => {
  return (
    <div className="out_wrapper">
      <div className="inner_wrapper">
        <h1>Каталог</h1>
        <form action="" className="search">
          <input type="text" placeholder="Поиск" />
          <input type="submit" className="btn_search" id="search_input"/>
          <label htmlFor="search_input" className="label_search"><img src={search} alt="" /></label>
        </form>
        <div className="catalog">
          <Link to="/product" className="product">
              <img src={Image1} alt="" />
          </Link>
          <Link to="/product" className="product">
              <img src={Image2} alt="" />
          </Link>
          <Link to="/product" className="product">
              <img src={Image3} alt="" />
          </Link>
          <Link to="/product" className="product">
              <img src={Image4} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Catalog;
