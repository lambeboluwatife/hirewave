import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resource from "./pages/Resource";
import Dream from "./components/dream/Dream";
import Jobs from "./pages/Jobs";
import Showcase from "./components/Landing Page/Showcase";
import Jumbotron from "./components/Landing Page/Jumbotron";
import About from "./components/Landing Page/About";
import FeaturedJobs from "./components//Landing Page/FeaturedJobs";
import data from "./data/jobs";
import faqsData from "./data/faq";
import servicesData from "./data/services";
import Services from "./components/Landing Page/Services";
import FAQ from "./components/Landing Page/FAQ";
import EmployersJumbotron from "./components/Employers Page/EmployersJumbotron";
import cards from "./data/employersCard";
import HiringExperience from "./components/Employers Page/HiringExperience";
import EmployersCards from "./components/Employers Page/EmployersCards";
import experienceData from "./data/hiringExperience";
import Note from "./components/Employers Page/Note";
import PostJob from "./components/Employers Page/PostJob";
import homeImage from "/Rectangle 493.jpg";

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

  const homeShowcase = {
    title: "Your Partner in \nHiring Excellence",
    text: "Need to discover top-tier talent for your business? \nLook no further. We bridge the gap between fresh \ntalent and thriving businesses.",
    button: "Explore Jobs",
    svg: true,
    // image: homeImage,
  };

  const employersShowcase = {
    title: "Connecting Talent \nWith Opportunity",
    text: "We’ve made hiring effortless with just few clicks! \nCheck it out!",
    button: "Post A Job",
    svg: false,
  };

  const faqContent = {
    title: "Frequently Asked Questions",
    text: "Here you can find solutions to all your queries.",
  };

  return (
    <Router>
      <Header />
      <Resource />
      {/* <Jobs /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Showcase showcase={homeShowcase} />
              <Jumbotron />
              <About />
              <Services services={services} />
              <FeaturedJobs jobs={jobs} />
              <FAQ
                faqContent={faqContent}
                toggle={toggle}
                faqs={faqs}
                selected={selected}
              />
            </>
          }
        />
        <Route
          path="/employers"
          element={
            <>
              <Showcase showcase={employersShowcase} />
              <EmployersJumbotron cards={cards} />
              <HiringExperience data={experienceData} />
              <Note />
              <PostJob />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
