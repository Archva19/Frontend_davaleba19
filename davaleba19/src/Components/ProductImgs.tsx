import { useState } from "react";
import { productImgs } from "../../arrItems.tsx";
import "./ProductsImgs.css";
import EmblaMain from "./EmblaMain.tsx";

export default function ProductImgs() {
  const [activeImg, setActiveImg] = useState(productImgs[0].src);
  const [prodWindowStatus, setProdWindowStatus] = useState(false);

  return (
    <>
      <div className="mainPageLeft">
        <img
          onClick={() => {
            setProdWindowStatus(true);
          }}
          className="activeProdImg"
          src={activeImg}
          alt=""
        />
        <div className="productsImgList">
          {productImgs.map((img) => (
            <img
              className={`productsImgItem ${img.src === activeImg ? "ImgItemActive" : ""}`}
              key={img.id}
              src={img.src}
              alt=""
              onClick={() => {
                setActiveImg(img.src);
              }}
            />
          ))}
        </div>
      </div>
      {prodWindowStatus ? (
        <EmblaMain
          closeFun={() => {
            setProdWindowStatus(false);
          }}
        />
      ) : null}
    </>
  );
}
