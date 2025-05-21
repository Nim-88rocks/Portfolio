import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCard from "./CertificateCard"; // You need to create this component
import cert1 from "../../Assets/Certificates/cert1.png";
import cert2 from "../../Assets/Certificates/cert2.jpg";
import cert3 from "../../Assets/Certificates/cert3.jpg";

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
              title="Certificate Title 1"
              description="Description or details about this certificate."
              link="https://certificate-link-1.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert2}
              title="Certificate Title 2"
              description="Description or details about this certificate."
              link="https://certificate-link-2.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert3}
              title="Certificate Title 3"
              description="Description or details about this certificate."
              link="https://certificate-link-3.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;