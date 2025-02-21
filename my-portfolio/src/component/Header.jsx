import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../cssFile/header.scss";

function Header({ activeSection, isScrolled }) {
  const [isNavOpen, setNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => setNavOpen(!isNavOpen);

  const closeNav = () => {
    if (windowWidth < 992) setNavOpen(false); // Close only on small screens
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      closeNav();
    }
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      expanded={isNavOpen}
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand onClick={() => scrollToSection("home")}>
          Negi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <Nav.Link
                key={id}
                className={activeSection === id ? "active" : ""}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
