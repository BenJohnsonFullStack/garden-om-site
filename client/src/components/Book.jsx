/* eslint-disable react/prop-types */

import Footer from "./Footer";
import Header from "./Header";

const Book = ({ toggleModalActive, setModalActive, modalActive }) => {
  const iframeStyle = {
    width: "100%",
    height: "300vh",
    border: "none",
  };

  return (
    <>
      <Header />
      <iframe
        src="https://gardenomyoga.simplybook.me"
        title="Schedule Your Yoga Session with Garden Om"
        style={iframeStyle}
      ></iframe>
      <Footer
        toggleModalActive={toggleModalActive}
        setModalActive={setModalActive}
        modalActive={modalActive}
      />
    </>
  );
};

export default Book;
