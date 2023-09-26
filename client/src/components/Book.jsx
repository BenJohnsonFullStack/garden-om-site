/* eslint-disable react/prop-types */
import BookingWidget from "./BookingWidget";
import Footer from "./Footer";
import Header from "./Header";

const Book = ({ toggleModalActive, setModalActive, modalActive }) => {
  return (
    <>
      <Header />
      <BookingWidget />
      <Footer
        toggleModalActive={toggleModalActive}
        setModalActive={setModalActive}
        modalActive={modalActive}
      />
    </>
  );
};

export default Book;
