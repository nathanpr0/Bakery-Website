import "../css/Contact.css";

function Contact() {
  return (
    <>
      <article className="contact-text" id="contact-us">
        <h3>CONTACT US</h3>
        <p>
          Experience the finest in croissants at Croissant Station, where quality meets taste perfection! Delve into our array of delectable croissants and get in touch with us for placing orders or to learn more about our flavorful
          selections.
        </p>
      </article>

      <div className="sosmed">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-google"></i>
      </div>

      <div className="contact-info">
        <article>
          <i className="fa-solid fa-location-dot"></i>
          <p>Rue de la Paix 14, 75002 Paris, Prancis</p>
        </article>

        <article>
          <i className="fa-solid fa-mobile"></i>
          <p>+33 1 23 45 67 89</p>
        </article>

        <article>
          <i className="fa-regular fa-clock"></i>
          <p>09:00 AM - 08:00 PM</p>
        </article>
      </div>
    </>
  );
}

export default Contact;
