import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Support from "./pages/Support";

const App = () => {
  return (
    <Router>
      <Header />
      <Support />
      <Footer />
    </Router>
  );
};

export default App;
