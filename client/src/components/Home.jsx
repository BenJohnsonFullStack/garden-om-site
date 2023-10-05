/* eslint-disable react/prop-types */
import BigLogo from "./BigLogo";
import BookButton from "./BookButton";
import Footer from "./Footer";
import Header from "./Header";
import { HashLink as Link } from "react-router-hash-link";

const Home = ({ toggleModalActive, setModalActive, modalActive }) => {
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
            In the meantime, please use the button below to book your first
            class!
          </p>
          <BookButton />
          <p className="coming-soon-reminder">
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
          <Link to="tel:7067806827" className="inline-link">
            <span className="bold">706.780.6827</span>
          </Link>{" "}
          <br />
          <Link to="email:contact@gardenomyoga.com" className="inline-link">
            <span className="bold">contact@gardenomyoga.com</span>
          </Link>
        </address>
      </div>

      <Footer
        setModalActive={setModalActive}
        toggleModalActive={toggleModalActive}
        modalActive={modalActive}
      />
    </div>
  );
};

export default Home;
