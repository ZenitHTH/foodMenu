import React from "react";
import { Components } from "react";
import Logo from "../MainLogo.png";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MainNavBar() {
  const listType = [
    { link: "/type", text: "show" },
    { link: "/type/create", text: "create" },
  ];
  const listSubtype = [
    { link: "/subtype", text: "show" },
    { link: "/subtype/create", text: "create" },
  ];

  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          Teenoi Phetchabun
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" variant="dark">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Type" id="basic-nav-dropdowm ">
              {listType.map((list, index) => {
                return (
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to={list.link}>
                      <p>{list.text}</p>
                    </Nav.Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <NavDropdown title="SubType" id="basic-nav-dropdowm ">
              {listSubtype.map((list, index) => {
                return (
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to={list.link}>
                      <p>{list.text}</p>
                    </Nav.Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
