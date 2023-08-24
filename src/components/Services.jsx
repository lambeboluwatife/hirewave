const Services = ({ services }) => {
  return (
    <div className="services">
      <div className="container">
        <h2>Our Services</h2>
        <h6 className="service-detail">
          Our tailored services connect you with top emerging talent, <br />{" "}
          ensuring your team stays competitive and dynamic. From custom <br />
          recruitment campaigns to internship programs, we’re here to help{" "}
          <br /> you build a thriving workplace that shapes the future of your{" "}
          <br />
          business.
        </h6>
        <div className="services-content">
          {services.map((service) => (
            <div className="service-item" key={service.id}>
              <img src={service.image} alt={service.title} />
              <h4>{service.title}</h4>
              <h6>{service.description}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
