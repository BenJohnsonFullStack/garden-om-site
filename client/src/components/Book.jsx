/* eslint-disable react/prop-types */
import CalendlyApp from "./CalendlyApp";
import Footer from "./Footer";
import Header from "./Header";

const Book = ({ toggleModalActive, setModalActive, modalActive }) => {
  return (
    <>
      <Header />
      <CalendlyApp />
      <Footer
        toggleModalActive={toggleModalActive}
        setModalActive={setModalActive}
        modalActive={modalActive}
      />
    </>
  );
};

export default Book;
