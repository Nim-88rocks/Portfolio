import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CertificateCard({ imgPath, title, description, link }) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={title}
        style={{ height: "250px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        {link && (
          <Button
            variant="primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: "10px" }}
          >
            View Certificate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;