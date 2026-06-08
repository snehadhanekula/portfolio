import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/new-header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Developer", "Full-Stack Developer", ".NET Developer", "AI-Assisted Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Full-Stack Software Developer | AI-Assisted Engineering</span>
                  <h1>{`Hi! I'm Sneha Dhanekula, `} 
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Full-Stack Developer", ".NET Developer", "AI-Assisted Engineer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I build full-stack software across frontend, backend, database, testing, and cloud workflows using Angular, TypeScript, C#, ASP.NET Web API, SQL, Entity Framework, React, Next.js, Firebase, and Google Cloud Platform. In my current role, I develop enterprise inspection platform features from Azure DevOps user stories and acceptance criteria, delivering reusable UI components, API integrations, database-backed workflows, and tested production-ready changes. I also use Claude Code to accelerate debugging, test planning, code review preparation, and delivery speed while maintaining ownership of final implementation decisions.
                  </p>
                  <button 
                    className="vvd"
                    onClick={() => window.location.href = "mailto:sdhaenk1@asu.edu"}
                  >
                    Contact Me <ArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Sneha Dhanekula software developer portfolio illustration"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


