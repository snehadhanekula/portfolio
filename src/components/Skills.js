import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      title: "Languages",
      details: "C#, Python, Java, JavaScript, TypeScript, Swift, C++, SQL",
      image: meter1,
    },
    {
      title: "Frontend Development",
      details: "Angular, React, Next.js, React Bootstrap, HTML, CSS, Responsive Design",
      image: meter1,
    },
    {
      title: "Backend & APIs",
      details: "ASP.NET Web API, Express.js, REST APIs, Entity Framework, Firebase Functions",
      image: meter3,
    },
    {
      title: "Databases",
      details: "SQL Server, Firestore, Firebase, NoSQL, SQL Query Optimization",
      image: meter1,
    },
    {
      title: "Cloud & DevOps",
      details: "Azure, Google Cloud Platform, Docker, Git, GitHub, Azure DevOps, Firebase Hosting",
      image: meter1,
    },
    {
      title: "Testing & Quality",
      details: "Unit Testing, Integration Testing, Debugging, Build Validation, Code Review, Agile Testing",
      image: meter3,
    },
    {
      title: "AI-Assisted Development",
      details: "Claude Code, Prompt Engineering, Test Planning, Code Review Preparation, AC Validation",
      image: meter1,
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>

              <p>
                Full-stack software developer with experience across frontend,
                backend, databases, cloud platforms, testing, and AI-assisted
                engineering workflows. I build production-focused applications
                using Angular, C#, ASP.NET Web API, SQL, React, Next.js,
                Firebase, Docker, Azure DevOps, and Claude Code.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item skill-card" key={index}>
                    <img src={skill.image} alt={`${skill.title} skill icon`} />
                    <h5>{skill.title}</h5>
                    <p className="skill-item-text">{skill.details}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};