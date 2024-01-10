import "../css/About.css";
import { Component, ReactNode } from "react";

export class About extends Component {
  elemen = (
    /* <!-- ABOUT PAGE --> */
    <section className="about" id="about-page">
      <div className="about-container">
        <figure>
          <img src="croissant & milk.jpg" alt="croissant & milk" />
        </figure>

        <article>
          <h3>Embracing Excellence Since 1980</h3>
          <p>
            Step into a legacy crafted over decades, where each flaky layer and exquisite flavor tells a story of dedication and perfection. Our journey, beginning in 1980, has been a relentless pursuit of croissant artistry, making us the
            ultimate destination for those craving unparalleled indulgence.
            <br />
            <br />
            Every croissant we serve is the result of a meticulous and loving process. From selecting the finest ingredients to mastering intricate folding techniques, each step is carefully executed to ensure every bite delivers
            unparalleled pleasure. With recipes passed down from generation to generation, each croissant stands as a testament to our dedication to crafting excellence in every detail.
          </p>
        </article>
      </div>
    </section>
  );

  render(): ReactNode {
    return <>{this.elemen}</>;
  }
}
