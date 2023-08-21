const Services = ({ services }) => {
  return (
    <div className="services">
      <div className="container">
        <h2>Our Services</h2>
        <h6 className="service-detail">
          Our tailored services connect you with top emerging talent, ensuring
          your team stays competitive and dynamic. <br />
          From custom recruitment campaigns to internship programs, we’re here
          to help you build a thriving workplace that <br /> shapes the future
          of your business.
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
