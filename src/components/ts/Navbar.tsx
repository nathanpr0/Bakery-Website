import "../css/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  // Create onClick function using useState
  const openMenu = () => setMenu(true);
  const closeMenu = (close: boolean) => setMenu(close);

  const navMenu = (
    <ul>
      <li>
        <a href="#main">Home</a>
      </li>
      <li>
        <a href="#about-page">About Us</a>
      </li>
      <li>
        <a href="#shop-page">Our Shop</a>
      </li>
      <li>
        <a href="#review-page">Reviews</a>
      </li>
      <li>
        <a href="#contact-us">Contact Us</a>
      </li>
    </ul>
  );

  return (
    <>
      <div className="menu">
        {/* <!-- LOGO --> */}
        <div className="logo">
          <img src="logo.png" alt="logo" />
          <h1>Croissant</h1>
        </div>

        {/* <!-- NAVBAR --> */}
        <nav className="navbar">{navMenu}</nav>

        {/* <!-- INPUT NAVBAR --> */}
        <nav className="navfeature">
          <form action="" method="get">
            <input type="search" id="search-box" placeholder="search" autoComplete="off" />
            <label htmlFor="search-box">
              {" "}
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <i className="fa-solid fa-cart-shopping"></i>
          </form>
        </nav>

        <i onClick={openMenu} className={`fa-solid fa-bars bar-menu ${menu ? "close-bar-menu" : "open-bar-menu"}`}></i>
        <i onClick={() => closeMenu(false)} className={`fa-solid fa-xmark close-menu ${menu ? "open-close-menu" : "close-close-menu"}`}></i>
      </div>

      {/* <!-- NAVBAR MOBILE RESPONSIVE --> */}

      <nav className={menu ? "navmobile navmobileOpen" : "navmobile"}>
        <form action="" method="get">
          <input type="search" id="search-box" placeholder="search" autoComplete="off" />
          <label htmlFor="search-box">
            {" "}
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <i className="fa-solid fa-cart-shopping"></i>
        </form>
        {navMenu}
      </nav>
    </>
  );
}

export default Navbar;
