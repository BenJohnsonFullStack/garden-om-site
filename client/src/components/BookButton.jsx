import { Link } from "react-router-dom";

const BookButton = () => {
  return (
    <div className="button-container">
      <Link to="https://gardenomyoga.simplybook.me">
        <button className="book-button">Book Now</button>
      </Link>
    </div>
  );
};

export default BookButton;
