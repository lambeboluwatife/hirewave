import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resource from "./pages/Resource";

const App = () => {
  return (
    <Router>
      <Header />
      <Resource />
      <Footer />
    </Router>
  );
};

export default App;
