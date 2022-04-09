import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import Button from "react-bootstrap/Button";



function Contact() {
  const form = useRef()



  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_luqbjuo',
            'template_62o0gnc',
            form.current,
            'MW_r0sUyh19sMuk3F'
          )
      
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contact <strong className="purple">ME</strong>
            </h1>
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          </Col>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half" >
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <Button type="Submit"> SEND </Button>
                </li>
              </ul>
            </form>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
