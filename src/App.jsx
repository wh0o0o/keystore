import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import Catalog from "./components/Catalog/Catalog";
import Sale from "./components/Sale/Sale";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
          </Routes>
          <Catalog />
          <Sale />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
