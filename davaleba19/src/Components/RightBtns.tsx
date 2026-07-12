import cart from "../assets/Shape.svg";
import "./RightBtns.css";

interface RightBtnsProps {
  count: number;
  lowerCount: () => void;
  higherCount: () => void;
  addToCart: () => void;
}

export default function RightBtns({ count, lowerCount, higherCount, addToCart}:RightBtnsProps) {
  return (
    <>
      <div className="btns">
        <div className = "quantityBox">
          <button onClick = {lowerCount} className = "minBtn">-</button>
          <p className = "quantity">{count}</p>
          <button onClick = {higherCount} className = "plusBtn">+</button>
        </div>
        <button onClick = {addToCart} className = "addToCartBtn">
          <img className = "btnCartIcon" src={cart} alt="" />
          <p className = "addTxt">Add to cart</p>
        </button>
      </div>
    </>
  );
}
