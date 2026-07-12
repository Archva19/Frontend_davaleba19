import { navItems } from "../../arrItems.tsx";
import logo from "../assets/sneakers.png";
import cart from "../assets/Group 14.svg";
import sandwich from "../assets/Combined Shape 2.svg";
import profileImg from "../assets/aa633b919aa79bb2b74839c67a9263940bbce297.png";
import rectangle from "../assets/Rectangle.png";
import closeSideMenuIcon from "../assets/Combined Shape-3.svg";
import "./Header.css";
import { MyContext } from "../App.tsx";
import { useContext, useState } from "react";
import Cart from "./Cart.tsx";

export default function Footer() {
  const context = useContext(MyContext);
  const [sideMenuVis, setSideMenuVis] = useState(false);

  function showSideMenu() {
    setSideMenuVis(true);
  }

  function closeSideMenu() {
    setSideMenuVis(false);
  }

  return (
    <>
      <div className="header">
        <div className="headerMain">
          <div className="headerMainInner">
            <div className="headerLeft">
              <button className="sandwichBtn" onClick={showSideMenu}>
                <img src={sandwich} alt="" />
              </button>
              <img src={logo} alt="logo" />
              <nav className="navigation">
                <ul className="navigationList">
                  {navItems.map((item) => (
                    <li key={item.id} className="navListItem">
                      <a className="navListItemLink" href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="headerRight">
              <button
                className="cartBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  context!.cartShow();
                }}
              >
                <img className="cartImg" src={cart} alt="cart" />
                <p className="cartCount">{context!.cartCount}</p>
              </button>
              <button className="profileBtn">
                <img className="profileImg" src={profileImg} alt="profileImg" />
              </button>
            </div>
          </div>
        </div>
        <img className="rectangle" src={rectangle} alt="" />
        {context!.cartVisible ? <Cart /> : null}
      </div>
      {sideMenuVis ? (
        <div className = "sideMenu">
          <div className="sideMenuBack"></div>
          <div className="sideMenuContent">
            <button onClick={closeSideMenu} className="closeSideMenuBtn">
              <img
                className="closeSideMenuIcon"
                src={closeSideMenuIcon}
                alt="close"
              />
            </button>
            <nav className="SideNavigation">
              <ul className="sideNavigationList">
                {navItems.map((item) => (
                  <li key={item.id} className="SideNavListItem">
                    <a className="SideNavListItemLink" href={item.link}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
