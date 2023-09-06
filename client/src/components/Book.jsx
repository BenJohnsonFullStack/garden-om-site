/* eslint-disable react/prop-types */
import CalendlyApp from "./CalendlyApp";
import Footer from "./Footer";
import Header from "./Header";

const Book = ({ isModalActive, setModalActive, modalActive }) => {
  return (
    <>
      <Header />
      <CalendlyApp />
      <Footer
        isModalActive={isModalActive}
        setModalActive={setModalActive}
        modalActive={modalActive}
      />
    </>
  );
};

export default Book;
