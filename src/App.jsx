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
import faqsData from "./data/faq";
import servicesData from "./data/services";
import Services from "./components/Services";
import FAQ from "./components/FAQ";

const App = () => {
  const [jobs] = useState(data);
  const [services] = useState(servicesData);
  const [faqs] = useState(faqsData);

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

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
              <FAQ toggle={toggle} faqs={faqs} selected={selected} />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
