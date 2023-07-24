import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useState, React } from "react";

function Bar({ user }) {
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {isRegisterPage || isLoginPage ? null : (
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          style={{ fontSize: "18px" }}
        >
          <Container>
            <Navbar.Brand>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Readmefy
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/daftar">
                  Buku
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/favorit">
                  Favorit
                </Nav.Link>
                <Nav.Link as={Link} to="/pengingat">
                  Pengingat
                </Nav.Link> */}
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success">Search</Button>
              </Form> */}
              <Nav>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  {/* <NavDropdown.Item href="#action/3.1">Edit</NavDropdown.Item> */}
                  <NavDropdown.Item>
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Logout
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
}

export default Bar;
