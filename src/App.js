import "./App.css";
import Banking from "./components/Banking";
import Choose from "./components/choose";
import NavBar from "./components/NavBar";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banking />
      <Choose />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
