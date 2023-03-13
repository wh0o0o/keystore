import "./Modal.css";
import image from "../../assets/images/ds.png";
import HeaderBlack from "../HeaderBlack/HeaderBlack";

const Modal = ({active, setActive}) => {
    return (
        <>
            <div className={active ? "out_modal active" : "out_modal"} onClick={() => setActive(false)}>
                <div className="inner_modal" onClick={(e => e.stopPropagation)}>

                    <h1 className="basket_title">Корзина</h1>

                    <div className="cart">
                        <img className="image_basket" src={image} alt="" />
                        <div className="text">
                            <p>Death Stranding</p>
                            <p>2400 р</p>
                            <p className="pink cursor">Удалить</p>
                        </div>
                    </div>
                    <p className="bold flex">ИТОГО:<p className="pink bold">4800 руб</p></p>
                    <div className="email_input basket_btn">Купить все</div>
                </div>
            </div>
        </>
    );
};
export default Modal;