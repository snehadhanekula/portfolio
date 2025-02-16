import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} className="text-center"> {/* Full width, centered */}
          <div className="social-icon">
							<a href="https://www.linkedin.com/in/snehadhanekula/">
								<img src={navIcon1} alt="" />
							</a>
							<a href="https://github.com/snehadhanekula">
								<img src={navIcon2} alt="" />
							</a>
							<a href="mailto:sdhanek1@asu.edu">
								<img src={navIcon3} alt="" />
							</a>
						</div>
            <p>Sneha Dhanekula</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
