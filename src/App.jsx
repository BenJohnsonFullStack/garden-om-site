import "./App.css";
import Home from "../components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/book" element={<Book />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
