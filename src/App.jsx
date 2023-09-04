import Home from "../components/Home";
import Book from "../components/Book";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/book" element={<Book />} />
        {/* <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />  */}
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
