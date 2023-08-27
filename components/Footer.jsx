import { Link } from "react-router-dom";
import AbellaLogo from "./AbellaLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const flexStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#edece8",
  textDecoration: "none",
};

const socialLinkStyle = {
  color: "#edece8",
  scale: "250%",
};

const h4Style = {
  textAlign: "center",
  color: "#dbb72a",
  fontSize: "1.2rem",
};

function Footer() {
  return (
    <footer className="footer-wrapper" style={{ backgroundColor: "#071902" }}>
      <div className="subscribe-wrapper">
        <h4 style={h4Style}>Ready to Get Started?</h4>
        <Link className="subscribe-link" style={flexStyle}>
          <p>Subscribe to our newsletter</p>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
      <div
        className="social-wrapper"
        style={{ maxWidth: "90%", margin: "0 auto" }}
      >
        <h4 style={h4Style}>Follow Us on Social Media</h4>
        <div
          className="social-links"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Link>
            <FontAwesomeIcon icon={faInstagram} style={socialLinkStyle} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faSquareFacebook} style={socialLinkStyle} />
          </Link>
        </div>
      </div>
      <div
        className="terms-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Link style={{ color: "#edece8" }}>Terms of Use</Link>
        <Link style={{ color: "#edece8" }}>Privacy Policy</Link>
      </div>
      <div className="copyright" style={flexStyle}>
        <p>&copy; 2023 Garden Om</p>
        <AbellaLogo />
      </div>
      <div
        className="scroll-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={flexStyle}
      >
        <p>Back to Top</p>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </footer>
  );
}

export default Footer;
