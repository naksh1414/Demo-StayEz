import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Wish from "./Pages/WishList/Wish";
import Flats from "./Pages/Flats/Flats";
import SpecificFlat from "./Pages/SpecificFlat/SpecificFlat";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wishlist" element={<Wish />} />
          <Route path="/flats" element={<Flats />} />
          <Route path="/flats/1" element={<SpecificFlat />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
