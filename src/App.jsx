import Footer from "./components/common/footer.jsx";
import Header from "./components/common/header.jsx";
import Nav from "./components/common/nav.jsx";
import About from "./components/pages/about.jsx";
import Home from "./components/pages/home.jsx";
import Newsletter from "./components/pages/newsletter.jsx";
import ProductList from "./components/products/productList.jsx";
import Product from "./components/products/product.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import lamps from "./data/lamps.json";
import candles from "./data/candles.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Nav />
        <main>
          <Home />
          <About />
          <Newsletter />
          <ProductList products={lamps} type={"Lamps"} />
          <ProductList products={candles} type={"Candles"} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
