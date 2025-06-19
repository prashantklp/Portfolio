import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prashant Lodh </span>
            from <span className="purple"> Mumbai, Maharashtra</span>
            <br />
            I am currently employed as a Full Stack Developer in KK Classes and Comminications.
            <br />
            I have completed Bsc In Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Love to travell
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with impact !"{" "}
          </p>
          <footer className="blockquote-footer">Prashant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
