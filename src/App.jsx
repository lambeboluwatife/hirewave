import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import Jumbotron from "./components/Jumbotron";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Showcase />
              <Jumbotron />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
