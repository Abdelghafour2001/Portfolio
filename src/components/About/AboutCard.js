import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdelghafour </span>
            from <span className="purple"> Morocco.</span>
            <br />I am a junior pursuing a bachelor degree in BIG DATA and Informations systems 
            in EST Sale, Morocco.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Peace be upon you for your perseverance. How excellent is the ultimate abode!"{" "}
          </p>
          <footer className="blockquote-footer">Quran[13:24]</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
