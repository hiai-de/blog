import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav, Container } from 'react-bootstrap'

const HeaderLink = ({ menuLink }) => (
  <Link to={menuLink.link} className="link-no-style" activeClassName="link-active">
    <Nav.Link as="span">{menuLink.title}</Nav.Link>
  </Link>
)

const CustomNavbar = ({ menuLinks }) => {
  return (
    <>
      <Navbar variant="dark" id="site-navbar">
        <Container>
          <Nav>
            { menuLinks.map(menuLink => <HeaderLink key={menuLink.link} menuLink={menuLink} />) }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar