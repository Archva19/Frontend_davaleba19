import "./RightTxts.css";

export default function RightTxts() {
  return (
    <>
      <div className="txtsContainer">
        <p className="txt1">SNEAKER COMPANY</p>
        <p className="txt2">Fall Limited Edition Sneakers</p>
        <p className="txt3">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className = "pricesContainer">
          <div className="prices">
            <p className="newPrice">$125.00</p>
            <p className="sale">50%</p>
          </div>
          <p className="oldPrice">$250.00</p>
        </div>
      </div>
    </>
  );
}
