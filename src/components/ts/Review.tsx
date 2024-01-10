import { Component, ReactNode } from "react";
import "../css/Review.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Style
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

export class Review extends Component {
  scores(): JSX.Element {
    const stars = [];
    let index = 0;
    while (index < 5) {
      stars.push(<i key={index} className="fa-solid fa-star" style={{ color: "#cd9254" }}></i>);
      index++;
    }
    const score = <div className="score">{stars}</div>;
    return score;
  }

  render(): ReactNode {
    return (
      <>
        {/* <!-- Review Page --> */}
        <section className="review" id="review-page">
          <h3>Reviews</h3>
          <p>Our Happy Customers</p>

          <div className="swiper review-container">
            <Swiper
              autoplay={{ delay: 3000 }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
              effect={"coverflow"}
              coverflowEffect={{ rotate: 45, slideShadows: false }}
              grabCursor={true}
              spaceBetween={20}
              breakpoints={{
                1100: {
                  // window screen > 1100px
                  slidesPerView: 3,
                },

                700: {
                  // window screen > 700px
                  slidesPerView: 2,
                },
              }}
              modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="review-col">
                <p>Their chocolate croissant is a delight! The melted chocolate within the crispy layers is just perfect. It's not overly sweet but enough to satisfy any chocolate craving. Highly recommended for chocolate enthusiasts!</p>

                <div className="profile">
                  <img src="review1.jpg" alt="profile pic" />

                  <div className="rating">
                    <p>John Smith</p>

                    {this.scores()}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="review-col">
                <p>When I first tasted their croissants, I was blown away by how perfect the texture and flavor were. Crispy on the outside, yet so soft inside, making it an unforgettable eating experience. I'll definitely be back!</p>

                <div className="profile">
                  <img src="review2.jpg" alt="profile pic" />

                  <div className="rating">
                    <p>Camille Lefèvre</p>

                    {this.scores()}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="review-col">
                <p>Their maple syrup croissant truly surprised me! The sweet and caramel-like flavor of the maple syrup pairs amazingly well with the croissant's deliciousness. It's an unexpected but wonderful combination!</p>

                <div className="profile">
                  <img src="review3.jpg" alt="profile pic" />

                  <div className="rating">
                    <p>Daniel Evans</p>

                    {this.scores()}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="review-col">
                <p>Never disappoints! Their croissants are consistently top-notch. I appreciate how they always come out fresh from the oven. Perfect for breakfast or a relaxing afternoon treat.</p>

                <div className="profile">
                  <img src="review4.jpg" alt="profile pic" />

                  <div className="rating">
                    <p>Amelia Larsen</p>

                    {this.scores()}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="review-col">
                <p>Croissant filled with fresh fruit? What a brilliant idea! I love how these croissants are not only tasty but also feel healthy with the fresh fruit pieces inside. A refreshing option</p>

                <div className="profile">
                  <img src="review5.jpg" alt="profile pic" />

                  <div className="rating">
                    <p>Ava Petrov</p>

                    {this.scores()}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="review-col">
                <p>
                  I'm thoroughly impressed with the croissants from this bakery. The distinct buttery aroma hits you as soon as you unwrap them. They are generously sized and incredibly satisfying. The price is definitely worth the quality
                </p>

                <div className="profile">
                  <img src="review6.jpg" alt="profile pic" />

                  <div className="rating">
                    <p>Ethan Baker</p>

                    {this.scores()}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="review-col">
                <p>Fruit flavors bring an unbeatable freshness. From the sweetness of strawberries to the tanginess of oranges and the tartness of blueberries, they provide a refreshing variety in every bite.</p>

                <div className="profile">
                  <img src="review7.jpg" alt="profile pic" />

                  <div className="rating">
                    <p>Daniel Fernandes</p>

                    {this.scores()}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="review-col">
                <p>
                  Experience sheer pastry perfection with these croissants—a golden-brown crust yielding to a tender, butter-infused interior. The layers delicately crumble, revealing a harmonious blend of flavors. The allure of their aroma
                  and the exquisite taste make each croissant a delectable pleasure.
                </p>

                <div className="profile">
                  <img src="review8.jpg" alt="profile pic" />

                  <div className="rating">
                    <p>Charlotte Martin</p>

                    {this.scores()}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="review-col">
                <p>
                  Indulge in these croissants that boast a crispy shell enveloping a buttery, pillowy inside. The expertise in layering is evident from the first bite to the last crumb. Their inviting aroma and perfect blend of textures
                  create an irresistible treat that's hard to forget.
                </p>

                <div className="profile">
                  <img src="review9.jpg" alt="profile pic" />

                  <div className="rating">
                    <p>Lara Horvat</p>

                    {this.scores()}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="review-col">
                <p>The chocolate flavor is a delightful blend of sweet and savory. Whether it's the smoothness of milk chocolate or the intense richness of dark chocolate, it delivers a tantalizing and rich indulgence</p>

                <div className="profile">
                  <img src="review10.jpg" alt="profile pic" />

                  <div className="rating">
                    <p>Robert Jones</p>

                    {this.scores()}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </section>
      </>
    );
  }
}
