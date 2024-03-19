import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ContactMe from "./Home/ContactMe";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/Projects" Component={Projects}></Route>
        <Route exact path="/#contact-me" Component={ContactMe}></Route>
        <Route path="*" Component={Home}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
