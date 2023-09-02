import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import './Style.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./pages/home/Page";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Page/>} ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
