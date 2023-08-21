import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import FeaturedJobs from "./components/FeaturedJobs";
import data from "./data/jobs";
import servicesData from "./data/services";
import Services from "./components/Services";

const App = () => {
  const [jobs] = useState(data);
  const [services] = useState(servicesData);
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
              <About />
              <FeaturedJobs jobs={jobs} />
              <Services services={services} />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
