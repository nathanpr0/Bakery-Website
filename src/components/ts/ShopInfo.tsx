import { Component, ReactNode } from "react";
import "../css/ShopInfo.css";

export class ShopInfo extends Component {
  render(): ReactNode {
    return (
      <>
        {/* <!-- SHOP INFO PAGE --> */}
        <section className="shop-info">
          <div className="shop-info-col">
            <i className="fa-solid fa-shop"></i>
            <h4>Open Hours</h4>
            <p>09:00 AM - 08:00 PM</p>
          </div>

          <div className="shop-info-col">
            <i className="fa-solid fa-location-dot"></i>
            <h4>Get Directions</h4>
            <p>Rue de la Paix 14, 75002 Paris, Prancis</p>
          </div>

          <div className="shop-info-col">
            <i className="fa-solid fa-phone"></i>
            <h4>+33 1 23 45 67 89</h4>
            <p>Call Us Now</p>
          </div>
        </section>
      </>
    );
  }
}
