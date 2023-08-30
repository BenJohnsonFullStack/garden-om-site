import BigLogo from "./BigLogo";
import Footer from "./Footer";
import Header from "./Header";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <div className="coming-soon-wrapper">
        <BigLogo />
        <h1>Yoga in the Historic Garden of Gordonido</h1>
        <h2>Full Site Coming Soon!</h2>
        <div className="coming-soon-text">
          <p>
            We are currently working on bringing you a wonderful web experience.
            In the meantime, please use the button below to book your{" "}
            <span className="bold">FREE</span> first class.
          </p>
          <p>
            Be sure to{" "}
            <Link to="#footer" className="inline-link">
              <span className="bold">Follow Us</span>
            </Link>{" "}
            on our socials and{" "}
            <Link to="#footer" className="inline-link">
              <span className="bold">Subscribe</span>
            </Link>{" "}
            to our newsletter for updates.
          </p>
        </div>
        <address>
          <h3>Contact Us</h3>
          <Link to="tel:2295880313" className="inline-link">
            <span className="bold">229.588.0313</span>
          </Link>{" "}
          <br />
          <Link to="email:contact@gardenomyoga.com" className="inline-link">
            <span className="bold">contact@gardenomyoga.com</span>
          </Link>
        </address>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
