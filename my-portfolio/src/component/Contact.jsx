import React from "react";
import "../cssFile/contact.scss";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import contactImage from "../assets/projectImages/contact.jpg";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage, setField } from "./redux/contactSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const { name, email, number, message, loading, success, error } = useSelector(
    (state) => state.contact
  );

  const handleChange = (e) => {
    dispatch(setField({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form with:", { name, email, number, message });
    dispatch(sendMessage({ name, email, number, message }));
  };
  return (
    <section id="contact" className="contact-section">
      {/* {loading && (
        <div className="loading-overlay">
          <Spinner animation="border" />
          <p>Sending Message...</p>
        </div>
      )} */}

      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <h2>Contact Me</h2>
            <p>Feel free to reach out for collaborations or just a chat!</p>
          </Col>
        </Row>

        <Row className="contact-content">
          <Col md={4} className="contact-info">
            <div className="profile-image">
              <img src={contactImage} alt="Profile" />
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <span>+91 8077040296</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>sashitnegi@gmail.com</span>{" "}
            </div>
          </Col>

          <Col md={8} className="contact-form-container">
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="number"
                  value={number}
                  onChange={handleChange}
                  placeholder="Your Number"
                  required
                />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </Form>
            {success && <p className="text-success">{success}</p>}
            {error && <p className="text-danger">{error}</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
