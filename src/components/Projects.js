import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import WorkExperience from "./WorkExperience";
import colorSharp2 from "../assets/img/color-sharp2.png";

export default function Projects() {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Experience, Projects & Leadership</h2>

            <p>
              Explore my software engineering experience, full-stack projects,
              and leadership roles across enterprise application development,
              cloud systems, AI-assisted workflows, and user-focused product
              development.
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
                  <Nav.Link eventKey="second">Projects</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Leadership & Campus Roles
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <WorkExperience />
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <section className="project-experience">
                    <h1 className="section-title">Selected Projects</h1>

                    <div className="work-experience">
                      <h2>Developer Portfolio Website</h2>
                      <h3>
                        React, React Bootstrap, JavaScript, CSS, Responsive
                        Design
                      </h3>

                      <ul>
                        <li>
                          Built and customized a responsive software developer
                          portfolio using reusable React components, React
                          Bootstrap, CSS animations, and mobile-first design.
                        </li>

                        <li>
                          Organized professional experience, technical skills,
                          projects, education, and contact information into a
                          recruiter-focused user experience.
                        </li>

                        <li>
                          Improved maintainability through modular component
                          architecture, reusable styling, and structured content
                          management.
                        </li>
                      </ul>

                    <a
                      href="https://github.com/snehadhanekula/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      View Source Code
                    </a>
                    </div>

                    <div className="work-experience">
                      <h2>YouTube Clone</h2>
                      <h3>
                        Next.js, Express.js, TypeScript, Docker, Firebase,
                        Google Cloud Platform
                      </h3>

                      <ul>
                        <li>
                          Built a full-stack video-sharing application with user
                          authentication, video uploads, cloud storage, and
                          scalable backend workflows.
                        </li>

                        <li>
                          Automated video processing and compression using
                          FFmpeg, Firebase Functions, Cloud Storage, and Pub/Sub.
                        </li>

                        <li>
                          Implemented secure authentication and data management
                          using Google OAuth, Firebase Authentication, Firestore,
                          and cloud-based deployment.
                        </li>
                      </ul>
                    </div>
                    <div className="work-experience">
							<h2>SeeMe iOS Journaling App</h2>
							<h3>Swift, Xcode, Firebase, AI-Driven Insights, Mobile Development</h3>
							<ul>
								<li>
								Contributed to an AI-powered digital journaling platform focused on user-centered mobile experiences, onboarding workflows, and backend feature support.
								</li>

								<li>
								Supported application development using Swift, Xcode, Firebase, and backend workflows to improve real-time functionality and mobile usability.
								</li>

								<li>
								Helped improve onboarding and user experience flows by combining mobile development, product thinking, and attention to user needs.
								</li>
							</ul>
              <div className="nda-badge">
                NDA-Protected Project
              </div>
							</div>
							<div className="work-experience">
              <h2>Enterprise Inspection Platform</h2>
								<h3>Angular, TypeScript, C#, ASP.NET Web API, SQL, Entity Framework, Azure DevOps</h3>

								<ul>
									<li>
									Built full-stack enterprise application features across frontend, backend, database, and testing layers using Angular, TypeScript, C#, ASP.NET Web API, SQL, and Entity Framework.
									</li>

									<li>
									Delivered reusable UI components, API integrations, backend models, validators, repositories, and database-backed workflows from Azure DevOps user stories and acceptance criteria.
									</li>

									<li>
									Strengthened feature quality through unit testing, integration testing, build validation, pull request feedback, debugging, and regression-focused review.
									</li>
								</ul>
              <div className="nda-badge">
                NDA-Protected Project
              </div>
							</div>
							<div className="work-experience">
								<h2>Lexical Analyzer Development Project</h2>
								<h3>C++, Regex, Compiler Design, Tokenization, Data Structures</h3>

								<ul>
									<li>
									Built a C++ lexical analyzer using regex-based tokenization to parse programming language input and identify valid tokens.
									</li>

									<li>
									Expanded syntax coverage for real numbers, exponents, identifiers, operators, and multiple token formats.
									</li>

									<li>
									Improved analyzer adaptability by supporting broader lexical patterns and structured token recognition logic.
									</li>
								</ul>
								</div>
                  </section>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <section className="leadership-experience">
                    <h1 className="section-title">
                      Professional & Leadership Experience
                    </h1>

                    <div className="work-experience additional-experience">
                      <h2>Adobe (Feb 2025 - Present)</h2>
                      <h3>Student Ambassador</h3>

                      <ul>
                        <li>
                          Conducted workshops on Adobe Express, UI/UX design,
                          digital storytelling, and rapid prototyping for student
                          projects.
                        </li>

                        <li>
                          Guided students in using Adobe tools to improve
                          creative workflows, presentation quality, and project
                          outcomes.
                        </li>
                      </ul>
                    </div>

                    <div className="work-experience additional-experience">
                      <h2>
                        Arizona State University (Aug 2024 - May 2025)
                      </h2>
                      <h3>Front Desk Assistant</h3>

                      <ul>
                        <li>
                          Managed student check-ins, check-outs, resident
                          inquiries, and front desk operations while maintaining
                          accurate records in the ASU Housing Portal.
                        </li>

                        <li>
                          Administered key distribution and access management
                          through StarRez, ensuring secure and organized building
                          access for residents.
                        </li>
                      </ul>
                    </div>

                    <div className="work-experience additional-experience">
                      <h2>
                        Arizona State University (Jan 2022 - Nov 2023)
                      </h2>
                      <h3>Residential Assistant</h3>

                      <ul>
                        <li>
                          Supported more than 1,500 residents and coordinated
                          move-in and move-out operations using StarRez housing
                          software.
                        </li>

                        <li>
                          Planned and delivered 20+ community programs while
                          supporting conflict resolution, resident engagement,
                          and campus operations.
                        </li>
                      </ul>
                    </div>
                  </section>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img
        src={colorSharp2}
        alt=""
        aria-hidden="true"
        className="background-image-right"
      />
    </section>
  );
}

