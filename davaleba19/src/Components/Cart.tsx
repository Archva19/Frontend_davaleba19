import { useContext } from "react";
import "./Cart.css";
import { MyContext } from "../App";
import product1 from "../assets/product1.png";
import trashIcon from "../assets/Mask 2.svg";

export default function Cart() {
  const context = useContext(MyContext);
  let prodVis = context.cartCount !== 0;
  return (
    <>
      <div className="cartWindow" onClick={(e) => e.stopPropagation()}>
        <p className="cartTxt">Cart</p>
        <div className="cartDecoLine"></div>
        <div className = {prodVis ? "cartMainContent" : "cartMainContentEmpty"}>
            {prodVis ? (
          <div className="fullCart">
            <div className="cartProducts">
              <img className="cartProdImg" src={product1} alt="" />
              <div className="cartProdTxts">
                <p className="cartProdName">Fall Limited Edition Sneakers</p>
                <div className="cartProdPrices">
                  <p className="cartProdPr1">$125.00 x {context.cartCount} </p>
                  <p className="cartProdPr2">${125 * context.cartCount}.00</p>
                </div>
              </div>
              <button className = "trashBtn">
                <img onClick = {context.resetCart} src={trashIcon} alt="" />
              </button>
            </div>
            <div className="checkOutBtn">Checkout</div>
          </div>
        ) : (
          <p className = "emptyCartTxt">Your cart is empty </p>
        )}
        </div>
      </div>
    </>
  );
}
