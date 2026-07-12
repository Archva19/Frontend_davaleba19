import cart from "../assets/Shape.svg";
import "./RightBtns.css";

export default function RightBtns({ count, lowerCount, higherCount, addToCart}) {
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
