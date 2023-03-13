import Catalog from "../Catalog/Catalog";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Sale from "../Sale/Sale";


function HomePage() {
    return (
        <>
            <Header />
            <Home />
            <Catalog />
            <Sale />
            <Form />
        </>
    );
}

export default HomePage;