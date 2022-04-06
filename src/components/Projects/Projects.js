import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gestion de Stock"
              description="A web application built with J2EE using Spring Boot Framework, in order to manage storage of different products and keep track of the transactions going on."
              link="https://github.com/Abdelghafour2001/GestionStock"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cars Sales"
              description="A template of a wbsite for selling and buying both used and new cars using HTML, CSS and Js only with possibility to viez cars informations and react to posts."
              link="https://github.com/Abdelghafour2001/CarsSales"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Car Rental"
              description="Full .net App with database for renting out cars in Morocco using online application forms and the ability to manage the cars and applications."
              link="https://github.com/Abdelghafour2001/Car-Rental"
            />
          </Col>

      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/Abdelghafour2001/Face-and-emotion-detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
