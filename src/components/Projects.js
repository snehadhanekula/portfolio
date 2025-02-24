import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import WorkExperience from "./WorkExperience";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";

export default function Projects() {
  const projects = [
    {
      title: "This Portfolio website",
      description: [
        "Developed a responsive portfolio website with React and implemented advanced animations using CSS and React Bootstrap",
        "Utilized React components and state management techniques to ensure a modular and maintainable codebase",
      ],
      imgUrl: projImg1,
      projectUrl: "https://github.com/snehadhanekula/portfolio",
    },
    {
      title: "WORK IN PROGRESS",
      description: [
        "WORK IN PROGRESS"
      ],
      imgUrl: projImg2,
      projectUrl: "https://yt-web-client-gq7klg4nva-uc.a.run.app/",
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Experience</h2>
            <p>
              Explore my professional journey through hands-on experience in software engineering, data analytics, and technical problem-solving. From impactful internships to innovative personal projects, each opportunity has refined my expertise and contributed to real-world solutions. Check out the tabs to dive into my skills and accomplishments! 🤍
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Work Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Significant Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Service & Leadership Roles</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <WorkExperience />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
              <Row>
                {projects.map((project, index) => (
                  <Col key={index}>
                    <ProjectCard {...project} />
                    {project.title === "This Portfolio website" && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Go to This Portfolio Github
                      </a>
                    )}
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

                <Tab.Pane eventKey="third">
                  {/* Inline markup for Service & Leadership Roles */}
                  <section className="leadership-experience">
                    <Container>
                      <Row>
                        <Col>
                          <div className="work-experience">
                            <h2>Adobe (Feb 2025)</h2>
                            <h3>Student Ambassador</h3>
                            <ul>
                              <li>
                              Conduct workshops on integrating Adobe Express into software development, prototyping, and data visualization.</li>
                              <li>
                              Leverage Adobe tools to enhance computational creativity, UI/UX design, and technical storytelling for CS applications.</li>
                              </ul>
                          </div>
                          <div className="work-experience">
                            <h2>Arizona State University (Aug 2024 - May 2025)</h2>
                            <h3>Desk Assistant</h3>
                            <ul>
                              <li>
                              Pioneered front-desk operations, managing 300+ student check-ins/check-outs with 100% accuracy in the ASU Housing Portal.                              </li>
                              <li>
                              Automated key distribution and access control protocols via StarRez, ensuring zero security incidents across 3 campus residence halls.
                              </li>
                              <li>
                              Streamlined emergency response coordination by implementing a real-time incident tracking dashboard, reducing escalation time by 30%.
                              </li>
                            </ul>
                          </div>
                          <div className="work-experience">
                            <h2>Arizona State University (Jan 2022 - Dec 2023)</h2>
                            <h3>Residential Assistant</h3>
                            <ul>
                              <li>
                              Spearheaded residential operations for 1,500+ students, optimizing move-in/move-out workflows using StarRez housing software to reduce processing time by 25%.
                              </li>
                              <li>
                              Orchestrated 20+ data-driven community-building initiatives (workshops, cultural programs), achieving a 15% increase in resident satisfaction scores and 85% average event attendance.
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
}

