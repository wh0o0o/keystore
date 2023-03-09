import { Link } from "react-router-dom";

import "../Catalog/Catalog.css";
import "./Sale.css";
import search from "../../assets/images/search.svg";
import Image1 from "../../assets/images/ds.png";
import Image2 from "../../assets/images/bs1.png";
import Image3 from "../../assets/images/bs2.png";
import Image4 from "../../assets/images/nms.png";

const Sale = () => {
  return (
    <div className="out_wrapper out_wrapper_sale">
      <div className="inner_wrapper">
        <h1>Скидки</h1>
        <div className="catalog">
          <Link to="" className="product product_sale">
              <img src={Image1} alt="" />
              <div className="sale_bg">
                  <p>-30%</p>
              </div>
          </Link>
          <Link to="" className="product product_sale">
              <img src={Image2} alt="" />
              <div className="sale_bg">
                  <p>-50%</p>
              </div>
          </Link>
          <Link to="" className="product product_sale">
              <img src={Image3} alt="" />
              <div className="sale_bg">
                  <p>-20%</p>
              </div>
          </Link>
          <Link to="" className="product product_sale">
              <img src={Image4} alt="" />
              <div className="sale_bg">
                  <p>-30%</p>
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sale;