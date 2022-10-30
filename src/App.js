import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
