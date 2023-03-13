import "./User.css";
import ava from "../../assets/images/ava.png";
import HeaderBlack from "../HeaderBlack/HeaderBlack";

const User = () => {
  return (
    <>
      <HeaderBlack />
      <div className="out_wrapper out_pages">
        <div className="inner_wrapper flex_wrapper">
          <img className="image_left" src={ava} alt="" />
          <div className="user_text">
            <h1>User name</h1>
            <p>+7 999 999 99 99</p>
            <p>user@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;