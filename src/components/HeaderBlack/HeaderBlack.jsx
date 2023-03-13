import { Link } from "react-router-dom";
import "./HeaderBlack.css";
import basket from "../../assets/images/basket.svg";
import user from "../../assets/images/user.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";

const HeaderBlack = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
    <header className="header_black">
      <div className="header_wrapper">
        <Link to="/" className="logo">
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
          <div className="cursor" onClick={() => setModalActive(true)}>
            <img src={basket} alt="" />
          </div>
          <Link to="/user">
            <img src={user} alt="" />
          </Link>
        </div>
      </div>
    </header>
    <Modal active={modalActive} setActive={setModalActive}/>
    </>
  );
};
export default HeaderBlack;