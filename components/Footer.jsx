import { Link } from "react-router-dom";
import AbellaLogo from "./AbellaLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="subscribe-wrapper">
        <h4>Ready to Get Started?</h4>
        <Link className="subscribe-link">
          <p>Subscribe to our newsletter</p>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
      <div className="social-wrapper">
        <h4>Follow Us on Social Media</h4>
        <Link>
          <FontAwesomeIcon icon={faSquareInstagram} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faSquareFacebook} />
        </Link>
      </div>
      <div className="terms-wrapper">
        <Link>Terms of Use</Link>
        <Link>Privacy Policy</Link>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Garden Om</p>
        <AbellaLogo />
      </div>
      <div
        className="scroll-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <p>Back to Top</p>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </footer>
  );
}

export default Footer;
