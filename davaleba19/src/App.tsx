import { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductImgs from "./Components/ProductImgs";
import RightBtns from "./Components/RightBtns";
import RightTxts from "./Components/RightTxts";

import EmblaCarousel from "./Components/EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";
import { productImgs } from "../arrItems.tsx";
const OPTIONS: EmblaOptionsType = {};


export const MyContext = createContext(null);

export default function App() {
  const [count, setCount] = useState(0);

  const [cartVisible, setCartVisible] = useState(false);

  function cartShow() {
    setCartVisible(!cartVisible);
  }

  function closeCartWindow() {
    setCartVisible(false);
  }

  function lowerCount() {
    setCount((prev) => prev - 1);
  }
  function higherCount() {
    setCount((prev) => prev + 1);
  }
  const [cartCount, setCartCount] = useState(0);
  function addToCart() {
    setCartCount((prev) => prev + count);
    setCount(0);
  }

  function resetCart() {
    setCartCount(0);
  }

  return (
    <>
      <MyContext.Provider
        value={{ cartCount, cartShow, cartVisible, setCartVisible, resetCart }}
      >
        <div className="mainWindow" onClick={closeCartWindow}>
          <Header />
          <div className="mainContent">
            <ProductImgs />
            <div className = "emblaCarouselMainWindow">
              <EmblaCarousel slides={productImgs} options={OPTIONS} carouselType = "mainPage" />
            </div>
            <div className="mainRight">
              <RightTxts />
              <RightBtns
                count={count}
                lowerCount={lowerCount}
                higherCount={higherCount}
                addToCart={addToCart}
              />
            </div>
          </div>
        </div>
      </MyContext.Provider>
    </>
  );
}
