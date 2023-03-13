import "./Product.css";
import image from "../../assets/images/ds.png";
import HeaderBlack from "../HeaderBlack/HeaderBlack";

const Product = () => {
    return (
        <>
            <HeaderBlack />
            <div className="out_wrapper out_pages">
                <div className="inner_wrapper flex_wrapper">
                    <img className="image_left image_product" src={image} alt="" />
                    <div className="user_text product_text">
                        <h1>Death Stranding</h1>
                        <p>
                            Легендарный разработчик Хидео Кодзима выпускает новую знаковую
                            для жанра игру. Сэм Бриджес должен отважиться преодолеть мир,
                            трансформированный Петлёй смерти. Держа в своих руках бессвязные
                            остатки нашего будущего, он отправляется в дорогу, чтобы восстановить
                            связь между осколками.
                        </p>
                        <h1 className="pink">2400 Р</h1>
                        <p className="product_btn">В корзину</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Product;