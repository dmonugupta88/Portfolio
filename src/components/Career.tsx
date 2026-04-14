import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Ad Designer</h4>
                <h5>Quadravision</h5>
              </div>
              <h3>2 Years</h3>
            </div>
            <p>Created high-impact ad designs for multiple digital campaigns in a fast-paced agency environment.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Brand Designer</h4>
                <h5>GoClick Ecommerce Pvt. Ltd.</h5>
              </div>
              <h3>1 Year</h3>
            </div>
            <p>Designed branding, website assets, and marketing creatives in collaboration with cross-functional teams.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Multimedia Designer</h4>
                <h5>Solvier Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2 Years</h3>
            </div>
            <p>Delivered digital & print designs including packaging, brochures, Instagram videos, and promotional creatives to boost brand presence.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI UX Design Course</h4>
                <h5>PW Skills</h5>
              </div>
              <h3>Education</h3>
            </div>
            <p>Certification UI UX Design Course from PW Skills.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Design Course</h4>
                <h5>DICS Education</h5>
              </div>
              <h3>Education</h3>
            </div>
            <p>Certification Graphic Design Course from DICS Education.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Com (Graduate)</h4>
                <h5>Delhi University SOL</h5>
              </div>
              <h3>Education</h3>
            </div>
            <p>Degree: B.Com (Graduate) from Delhi University SOL.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
