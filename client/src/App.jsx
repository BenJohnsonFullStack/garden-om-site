import Home from "./components/Home";
import Book from "./components/Book";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const bodyStyle = document.body.style;
    if (modalActive) {
      bodyStyle.overflowY = "hidden";
    } else {
      bodyStyle.overflowY = "auto";
    }
  }, [modalActive]);

  const isModalActive = () => {
    setModalActive(!modalActive);
  };

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              isModalActive={isModalActive}
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          }
        />

        <Route
          exact
          path="/book"
          element={
            <Book
              isModalActive={isModalActive}
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          }
        />
        {/* <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />  */}
      </Routes>
    </>
  );
}

export default App;
