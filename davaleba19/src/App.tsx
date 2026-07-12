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

interface MyContextType {
  cartCount: number;
  cartShow: () => void;
  cartVisible: boolean;
  setCartVisible: (visible: boolean) => void;
  resetCart: () => void;
}

export const MyContext = createContext<MyContextType | null>(null);

export default function App() {
  const [count, setCount] = useState<number>(0);
const [cartCount, setCartCount] = useState<number>(0);
  const [cartVisible, setCartVisible] = useState<boolean>(false);

  function cartShow() {
    setCartVisible(!cartVisible);
  }

  function closeCartWindow() {
    setCartVisible(false);
  }

  function lowerCount() {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }
  function higherCount() {
    setCount((prev) => prev + 1);
  }
  
  function addToCart() {
    setCartCount((prev) => prev + count);
    setCount(0);
  }

  function resetCart() {
    setCartCount(0);
  }

  const value: MyContextType = {
    cartCount,
    cartShow,
    cartVisible,
    setCartVisible,
    resetCart,
  };

  return (
    <>
      <MyContext.Provider
        value={value}
      >
        <div className="mainWindow" onClick={closeCartWindow}>
          <Header />
          <div className="mainContent">
            <ProductImgs />
            <div className="emblaCarouselMainWindow">
              <EmblaCarousel
                slides={productImgs}
                options={OPTIONS}
                carouselType="mainPage"
              />
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
