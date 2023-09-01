import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tensiherosec from "./pages/Tensiherosec";
import Tensikhaloapp from "./pages/Tensikahloapp";
import Appfunctionality from "./pages/Appfunctionality";
import Aboutennis from "./pages/Aboutennis";
import Findnear from "./pages/Findnear";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" 
          element=
          {<><Tensiherosec/><Tensikhaloapp/> <Appfunctionality/>
         <Aboutennis/>   <Findnear/> </>}
         ></Route>
         
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
