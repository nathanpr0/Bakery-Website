import "../css/MainPage.css";

type nameClass<freeType> = {
  name: freeType;
};

type typeTeks = {
  teks: string;
};

const buttonClass = ({ name, teks }: nameClass<string> & typeTeks) => {
  return { name, teks };
};

const nameResult = [buttonClass({ name: "explore", teks: "Explore Our Menu" }), buttonClass({ name: "order", teks: "Want to Order?" })];

function MainPage() {
  const teks: JSX.Element = (
    <article className="main-text">
      <h3>Our Delicious & Crunchy Croissant Delight</h3>
      <p>
        Delve into the world of our artisanal croissant - a perfect blend of crispy, golden layers and rich, delightful flavors. Each bite is an experience of pure pleasure, revealing a tantalizing combination of textures. Indulge in the
        allure of our delectable croissant that promises to elevate your taste buds to new heights.
      </p>
      <br />
      <a className={nameResult[0].name} href="#shop-page">
        {nameResult[0].teks}
      </a>
      <a className={nameResult[1].name} href="">
        {nameResult[1].teks}
      </a>
    </article>
  );

  const picture = (): JSX.Element => {
    const pic = (
      <figure className="main-img">
        <img src="two brown croissants.jpg" alt="two brown croissants" />
      </figure>
    );

    return pic;
  };

  return (
    <>
      {/* <!-- MAIN PAGE --> */}
      <section className="main-page" id="main">
        {teks}
        {picture()}
      </section>
    </>
  );
}

export default MainPage;
