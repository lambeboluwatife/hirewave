import Item from "./Item";

const FeaturedJobs = ({ jobs }) => {
  return (
    <div className="featured-jobs">
      <div className="container">
        <div className="featured-title">
          <h2>Explore Featured Jobs</h2>
          <a href="/jobs">View All</a>
        </div>
        <div className="featured-items">
          {jobs.map((job) => (
            <Item key={job.id} job={job} />
          ))}
        </div>
        <div className="featured-btn">
          <a href="/jobs">
            <button className="btn">View all jobs</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
