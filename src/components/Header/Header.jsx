import { Link } from "react-router-dom";
import "./Header.css";
import basket from "../../assets/images/basket.svg";
import user from "../../assets/images/user.svg";

const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        <Link to="" className="logo">
          Key<div className="pink">Store</div>
        </Link>
        <ul>
          <li>
            <Link to="">каталог</Link>
          </li>
          <li>
            <Link to="">скидки</Link>
          </li>
          <li>
            <Link to="">поддержка</Link>
          </li>
        </ul>
        <div className="icons">
          <Link to="">
            <img src={basket} alt="" />
          </Link>
          <Link to="/user">
            <img src={user} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
