const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div className="grid">
          <div className="showcase-content">
            <h1>
              Your Partner in <br /> Hiring Excellence
            </h1>
            <h6>
              Need to discover top-tier talent for your business, look no
              further. We <br /> bridge the gap between fresh talent and
              thriving businesses.
            </h6>
            <a href="/jobs">
              <button className="btn">Explore Jobs</button>
            </a>
            <div className="candidates">
              <img className="ellipse-1" src="/Ellipse 207.svg" alt="" />
              <img className="ellipse-2" src="/Ellipse 208.svg" alt="" />
              <img className="ellipse-3" src="/Ellipse 209.svg" alt="" />
              <img className="ellipse-4" src="/Ellipse 210.svg" alt="" />
              <img className="ellipse-5" src="/Ellipse 212.svg" alt="" />
              <img className="ellipse-6" src="/Ellipse 213.svg" alt="" />
              <h5>20+</h5>
              <h6>Candidates</h6>
            </div>
          </div>
          <div className="showcase-image">
            {/* <div className="orange"></div> */}
            <img src="/backdrop.jpg" alt="backdrop" className="item-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
