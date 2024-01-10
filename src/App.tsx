import Navbar from "./components/ts/Navbar";
import MainPage from "./components/ts/MainPage";
import { ShopInfo } from "./components/ts/ShopInfo";
import { About } from "./components/ts/About";
import Product from "./components/ts/Product";
import { Review } from "./components/ts/Review";
import Contact from "./components/ts/Contact";
import "./App.css";

// Scroll Reveal Effect
function scroll(direct: string, reset: boolean, tag: string, delay: number) {
  const scrollEffect = ScrollReveal({
    origin: direct,
    distance: "50px",
    duration: 2400,
    reset: reset,
  });

  return scrollEffect.reveal(tag, { delay: delay });
}

scroll("top", false, "header", 100);
scroll("left", false, ".main-text", 300);
scroll("right", false, ".main-img", 300);
scroll("bottom", false, ".shop-info", 300);
scroll("top", false, ".about", 200);
scroll("right", false, ".about-container > figure", 400);
scroll("left", false, ".about-container > article", 400);
scroll("bottom", false, ".shop", 300);
scroll("top", false, ".review", 300);
scroll("bottom", false, ".review-container", 400);
scroll("top", false, "footer", 300);

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <MainPage />
        <ShopInfo />
        <About />
        <Product section="product" name="product-col" />
        <Review />
      </main>

      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
