import "../css/Product.css";

type nameClass = {
  section: string;
  name: string;
};

function Product({ section, name }: nameClass) {
  type Size = {
    height: number;
  };

  const size = ({ height }: Size) => {
    const call = height + "px";
    return String(call);
  };

  const Value = size({ height: 320 });

  return (
    <>
      {/* <!-- SHOP PAGE --> */}
      <section className="shop" id="shop-page">
        <h3>Our Shop</h3>
        <p>Check our Popular Products</p>

        <div className={section}>
          <div className={name}>
            <img src="chocolate.jpg" alt="chocolate" height={Value} />
            <h4>Croissant Chocolate</h4>
            <p>A delicious croissant with a generous chocolate filling.</p>
            <p>Price : €3.99</p>
            <a href="">Order Now</a>
          </div>

          <div className={name}>
            <img src="almond.jpg" alt="almond" height={Value} />
            <h4>Croissant Almond</h4>
            <p>A classic croissant filled with flavorful almond paste.</p>
            <p>Price : €4.29</p>
            <a href="">Order Now</a>
          </div>

          <div className={name}>
            <img src="cream.jpg" alt="cream" height={Value} />
            <h4>Croissant Cream</h4>
            <p>A delightful croissant filled with creamy goodness.</p>
            <p>Price : €3.79</p>
            <a href="">Order Now</a>
          </div>

          <div className={name}>
            <img src="fruit.jpg" alt="fruit" height={Value} />
            <h4>Croissant Fruit</h4>
            <p>A croissant bursting with assorted fruit flavors.</p>
            <p>Price : €4.49</p>
            <a href="">Order Now</a>
          </div>

          <div className={name}>
            <img src="maple syrup.jpg" alt="maple syrup" height={Value} />
            <h4>Croissant Maple Syrup</h4>
            <p>A delectable croissant drizzled with maple syrup.</p>
            <p>Price : €5.99</p>
            <a href="">Order Now</a>
          </div>

          <div className={name}>
            <img src="mur.jpg" alt="mur" height={Value} />
            <h4>Croissant Mur</h4>
            <p>An exquisite croissant with a special Mur-inspired filling.</p>
            <p>Price : €6.49</p>
            <a href="">Order Now</a>
          </div>
        </div>

        <p>
          <a href="" className="all-products" target="">
            See All Products
          </a>
        </p>
      </section>
    </>
  );
}

export default Product;
