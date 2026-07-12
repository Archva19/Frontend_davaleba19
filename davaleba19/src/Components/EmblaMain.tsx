import EmblaCarousel from "./EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";
import "./embla.css";
import { productImgs } from "../../arrItems.tsx";
import closeImg from "../assets/Combined Shape.svg";
import closeImgHover from "../assets/Combined Shape-2.svg";

const OPTIONS: EmblaOptionsType = {};

export default function EmblaMain({ closeFun }) {
  return (
    <>
      <div className="emblaWindow" onClick={closeFun}>
        <div className="modalContent">
          <button onClick={closeFun} className="closeBtn">
            <img className="closeImg" src={closeImg} alt="close" />
            <img className="closeImgHover" src={closeImgHover} alt="close" />
          </button>
          <EmblaCarousel slides={productImgs} options={OPTIONS} carouselType = "separateWindow"/>
        </div>

      </div>
    </>
  );
}
