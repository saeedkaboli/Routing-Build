import { Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import About from "./Pages/About/About";
import Content from "./Pages/Content/Content";
const App = () => {
  return (
    <div className="App">
      {/* The Navbar */}
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About/>} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </div>
      <footer>
        <h5>این وب سایت توسط سعید کابلی کد نویسی شده است</h5>
      </footer>
    </div>
  );
};
export default App;
