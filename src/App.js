import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/footer.js";
import Header from "./components/common/header";
import Nav from "./components/common/nav";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import Newsletter from "./components/pages/newsletter";
import ProductList from "./components/products/productList";
import Product from "./components/products/product";

import lamps from "./data/lamps.json";
import candles from "./data/candles.json";

// import { useState } from "react";

// const [type, setType] = useState("")
function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Nav />
        {/* <Route path="" element{} */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route
              path="/lamps"
              element={<ProductList products={lamps} type={"Lamps"} />}
            />
            <Route
              path="/candles"
              element={<ProductList products={candles} type={"Candles"} />}
            />

            <Route
              path="/lamps/:id"
              element={<Product products={lamps} type={"Lamps"} />}
            />

            <Route
              path="/candles/:id"
              element={<Product products={candles} type={"Candles"} />}
            />

            <Route
              path="/lamps/floor"
              element={
                <ProductList products={lamps} type={"Lamps"} styles={"Floor"} />
              }
            />

            <Route
              path="/lamps/ceiling"
              element={
                <ProductList
                  products={lamps}
                  type={"Lamps"}
                  styles={"Ceiling"}
                />
              }
            />
            <Route
              path="/lamps/table"
              element={
                <ProductList products={lamps} type={"Lamps"} styles={"Table"} />
              }
            />
            <Route
              path="/candles/decorative"
              element={
                <ProductList
                  products={candles}
                  type={"Candles"}
                  styles={"Decorative"}
                />
              }
            />

            <Route
              path="/candles/flameless"
              element={
                <ProductList
                  products={candles}
                  type={"Candles"}
                  styles={"Flameless"}
                />
              }
            />
            <Route
              path="/candles/celebratory"
              element={
                <ProductList
                  products={candles}
                  type={"Candles"}
                  styles={"Celebratory"}
                />
              }
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
