import { Container, Row, Col } from "react-bootstrap";
export default function WorkExperience() {
	return (
		<section className="experience-section" id="experience">
			<Container>
			<h1 className="section-title">Professional Experience</h1>
				<Row>
					<Col>
						<div className="work-experience"> 
							<h2>Aura Solutions, LLC Inc (June 2025 - Present)</h2> 
							<h3>Software Developer</h3> 
							<ul> 
								<li> Built full-stack features for an enterprise inspection platform using Angular, TypeScript, C#, ASP.NET Web API, SQL, and Entity Framework. 
								</li> 
								<li> Delivered reusable UI components, REST API integrations, backend models, validators, repositories, and database-backed workflows from Azure DevOps user stories and acceptance criteria. 
								</li> 
								<li> Improved software quality through unit testing, integration testing, build validation, pull request reviews, debugging, and regression analysis. 
								</li> 
								<li> Used Claude Code to accelerate development, test planning, code review preparation, and requirements validation while maintaining ownership of final implementation decisions. 
								</li> 
							</ul> 
						</div>
						<div className="work-experience">
							<h2>Channel Soft Inc (May 2024 - Aug 2024)</h2>
							<h3>Software Engineer Intern</h3>
							<ul>
								<li> Developed full-stack software features using Python and SQL, resolving 15+ production defects and improving application stability by 20% for more than 1,000 users. 
								</li> 
								<li> Optimized SQL queries and implemented caching strategies, reducing application load times by 15% and improving backend performance. 
								</li> 
								<li> Collaborated with QA and cross-functional teams in Agile sprints, improving testing workflows and accelerating feature delivery by 20%.
								</li>
							</ul>
						</div>
                        <div className="work-experience">
							<h2>Chain-Link Research (May 2023 - Aug 2023)</h2>
							<h3>Software Engineer Intern</h3>
							<ul>
								<li> Redesigned WordPress website layouts using HTML, CSS, SEO practices, and analytics insights, increasing user engagement by 10%. 
								</li> 
								<li> Collaborated with engineering teams during Agile sprints to prototype responsive web solutions and reduce client-reported latency by 18%. 
								</li> 
								<li> Refactored legacy frontend code using HTML and CSS best practices, improving maintainability, mobile responsiveness, and scalability for future releases. 
								</li>
							</ul>
						</div>
						<div className="work-experience">
							<h2>SeeMe (Apr 2023 - Apr 2024)</h2>
							<h3>Application Developer</h3>
							<ul>
								<li>
								Contributed to an AI-powered digital journaling platform focused on user-centered mobile experiences, onboarding workflows, and backend feature support.
								</li>
								<li>
								Supported application development using Swift, Xcode, Firebase, and backend workflows to improve real-time functionality and cross-platform usability.
								</li>
								<li>
								Helped shape onboarding and user experience flows by combining technical development, product thinking, and attention to accessibility across digital ecosystems.
								</li>
							</ul>
						</div>
                        <div className="work-experience">
							<h2>DSL EST PVT LTD (May 2022 - Aug 2022)</h2>
							<h3>Technical Support Intern </h3>
							<ul>
								<li> 
								Diagnosed and resolved 50+ network and connectivity issues using Cisco tools, reducing average resolution time by 20%. 
								</li> 
								<li> 
								Configured and optimized routers and switches supporting more than 1,000 users, reducing downtime by 30% during peak usage periods. 
								</li> 
								<li> 
								Created standardized troubleshooting documentation for 15+ technicians, reducing escalations by 25% and improving support consistency. 
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}