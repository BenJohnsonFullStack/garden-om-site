import { Link } from "react-router-dom";

const BookButton = () => {
  return (
    <div className="button-container">
      <Link to="/book" target="_blank">
        <button className="book-button">Book Now</button>
      </Link>
    </div>
  );
};

export default BookButton;
