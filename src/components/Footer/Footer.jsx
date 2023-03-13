import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="header_wrapper footer_wrapper">
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
          <li>
            <Link to="">оферта</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;