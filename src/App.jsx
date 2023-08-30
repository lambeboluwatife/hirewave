import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resource from "./pages/Resource";
import Jobs from "./pages/Jobs";

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Resource /> */}
      <Jobs />
      <Footer />
    </Router>
  );
};

export default App;
