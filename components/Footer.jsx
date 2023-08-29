import { Link } from "react-router-dom";
import AbellaLogo from "./AbellaLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="subscribe-wrapper">
        <h4>Ready to Get Started?</h4>
        <Link className="subscribe-link">
          <p className="subscribe">Subscribe to our newsletter</p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="subscribe chevron"
          />
        </Link>
      </div>
      <div className="social-wrapper">
        <h4>Follow Us on Social Media</h4>
        <div className="social-links">
          <Link>
            <FontAwesomeIcon icon={faInstagram} className="social-link" />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faSquareFacebook} className="social-link" />
          </Link>
        </div>
      </div>
      <div className="terms-wrapper">
        <Link className="terms">Terms of Use</Link>
        <Link className="terms">Privacy Policy</Link>
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
        <p className="scroll">Back to Top</p>
        <FontAwesomeIcon icon={faChevronUp} className="scroll chevron" />
      </div>
    </footer>
  );
}

export default Footer;