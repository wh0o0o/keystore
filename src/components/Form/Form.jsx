import "./Form.css";

const Form = () => {
    return (
        <div className="out_wrapper">
            <div className="inner_wrapper">
                <h1>Получайте акции первыми</h1>
                <p>Подпишитесь на рассылку, чтобы быть в курсе!</p>
                <form action="" className="search">
                    <input type="text" placeholder="Email" />
                    <input type="submit" className="email_input" id="email_input" value="Подписаться"/>
                </form>
            </div>
        </div>
    );
};
export default Form;