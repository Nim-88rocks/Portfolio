import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCard from "./CertificateCard"; // You need to create this component
import cert1 from "../../Assets/Certificates/cert11.png";
import cert2 from "../../Assets/Certificates/cert12.png";
import cert3 from "../../Assets/Certificates/cert133.png";

function Certificates() {
  return (
    <Container fluid className="certificate-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I have earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert1}
              title="DSA "
              description="A guided path to Data Structures and Algorithms from scratch,basically developing basix understanding of diffrent datastructures  provided by Coding Ninjas."
              link="https://certificate-link-1.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert2}
              title="Java "
              description="In Becherlor of Computer Science, I have completed a course on Java Programming provided by Microsoft."  
              link="https://certificate-link-2.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert3}
              title="Learn Social Engineering"
              description="Learn something new that is social engineering and how to protect yourself from it.Basically a course with how to inforamtaion gathered about target and then penetrate his/her system   provided by Udemy."
              link="https://certificate-link-3.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;