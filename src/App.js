import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import './Style.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./pages/home/Page";
import Player from "./player/Player";
import Academy from "./academy/Academy";
import ClientLogoSlider from "./pages/home/ClientLogoSlider";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Page />} ></Route>
          <Route path="/Player" element={<Player />} ></Route>
          <Route path='/academy' element={<Academy />}>
          </Route>
        </Routes>
        <ClientLogoSlider />
        <Footer />
      </Router>
    </>
  );
}

export default App;
