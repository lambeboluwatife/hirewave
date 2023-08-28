const HiringExperience = ({ data }) => {
  return (
    <div className="hiring-experience">
      <div className="container">
        <h2>A Simplified Hiring Experience</h2>
        <div className="experience-box">
          {data.map((item) => (
            <div
              className={
                item.reverse ? "experience-data reverse" : "experience-data"
              }
              key={item.id}
            >
              <div className="experience-image">
                <img src={item.image} alt="" />
              </div>
              <div className="experience-content">
                <h4>{item.title}</h4>
                <h6>{item.text}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringExperience;
