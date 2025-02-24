import { Container, Row, Col } from "react-bootstrap";
export default function WorkExperience() {
	return (
		<section className="">
			<Container>
				<Row>
					<Col>
						<div className="work-experience">
							<h2>Channel Soft Inc  (May 2024 - Aug 2024)</h2>
							<h3>Software Engineer Intern</h3>
							<ul>
								<li>
                                Spearheaded full-stack development of features using Python and SQL, resolving 15+ critical bugs to boost stability by 20% and elevate satisfaction for 1,000+ users.
                                </li>
								<li>
                                Engineered a 15% reduction in load times through SQL query optimization and caching strategies, setting a performance benchmark adopted for future releases.
								</li>
								<li>
                                Collaborated with QA teams to streamline Agile testing workflows, accelerating feature deployment by 20% and aligning deliverables with business KPIs.
								</li>
							</ul>
						</div>
                        <div className="work-experience">
							<h2>Chain-Link Research  (May 2023 - Aug 2023)</h2>
							<h3>Software Engineer Intern</h3>
							<ul>
								<li>
                                Leveraged WordPress CMS and analytics to redesign website layouts, driving a 10% user engagement increase through SEO-optimized, mobile-responsive content.
                                </li>
								<li>
                                Partnered with engineering teams to prototype web solutions during Agile sprints, reducing client-reported latency by 18% and exceeding performance targets.
								</li>
								<li>
                                Modernized legacy codebases with HTML/CSS best practices, improving site scalability for 3+ future feature deployments.
								</li>
							</ul>
						</div>
                        <div className="work-experience">
							<h2>DSL EST PVT LTD (May 2022 - Aug 2022)  </h2>
							<h3>Technical Support Intern </h3>
							<ul>
								<li>
                                Diagnosed 50+ daily network issues using Cisco tools, slashing resolution time by 20% and improving customer satisfaction scores by 35%.
								</li>
								<li>
                                Optimized router and switch configurations for 1,000+ users, reducing downtime by 30% during peak hours and enabling seamless remote operations.
								</li>
								<li>
                                Documented troubleshooting protocols for 15+ technicians, cutting escalations by 25% and standardizing team workflows.
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}