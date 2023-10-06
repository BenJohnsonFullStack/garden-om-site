/* eslint-disable react/prop-types */

import Footer from "./Footer";
import Header from "./Header";
import BookingWidget from "./BookingWidget";

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
