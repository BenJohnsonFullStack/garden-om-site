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
            <span>FREE</span> first class.
          </p>
          <p>
            Be sure to{" "}
            <Link to="#footer">
              <span>FOLLOW US</span>
            </Link>{" "}
            on our socials and{" "}
            <Link to="#footer">
              <span>SUBSCRIBE</span>
            </Link>{" "}
            to our newsletter for updates.
          </p>
        </div>
        <address>
          <h3>Contact Us</h3>
          <Link to="tel:2295880313">229.588.0313</Link> <br />
          <Link to="email:contact@gardenomyoga.com">
            contact@gardenomyoga.com
          </Link>
        </address>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
