import CalendlyGroupApp from "./CalendlyGroupApp";
import Footer from "./Footer";
import Header from "./Header";

const GroupBooking = ({ isModalActive, setModalActive, modalActive }) => {
  return (
    <>
      <Header />
      <CalendlyGroupApp />
      <Footer
        isModalActive={isModalActive}
        setModalActive={setModalActive}
        modalActive={modalActive}
      />
    </>
  );
};

export default GroupBooking;
