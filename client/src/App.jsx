import Home from "./components/Home";
import Book from "./components/Book";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  // State to manage the modal window
  const [modalActive, setModalActive] = useState(false);

  // Effect to update the body overflow style based on the modalActive state
  useEffect(() => {
    if (modalActive) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }
  }, [modalActive]);

  // Function to toggle the modalActive state
  const toggleModalActive = () => {
    setModalActive(!modalActive);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          component={
            <Home
              toggleModalActive={toggleModalActive}
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          }
        />

        <Route
          path="book"
          component={
            <Book
              toggleModalActive={toggleModalActive}
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          }
        />

        {/* <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  */}
      </Routes>
    </>
  );
}

export default App;
