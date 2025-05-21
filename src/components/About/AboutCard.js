import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nimesh Yadav </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />
            I am currently working on a research :Leveraging AI, Brain-Computer Interfaces, and Multimodal Systems for Dream Capture and Analysis”.
            <br />
            Final semester Student (Masters) in Computer Science  at BHU, Varanasi, India.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing e-sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning new things may be powered but creating is a biggest part of fun  "{" "}
          </p>
          <footer className="blockquote-footer">Nimesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
