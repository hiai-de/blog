import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav, Container } from 'react-bootstrap'

const CustomNavbar = ({ pageInfo }) => {
  return (
    <>
      <Navbar variant="dark" id="site-navbar">
        <Container>
          <Nav activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/blog" className="link-no-style">
              <Nav.Link as="span" eventKey="blog">
                Blog
              </Nav.Link>
            </Link>

            <Link to="/about" className="link-no-style">
              <Nav.Link as="span" eventKey="about">
                Über uns
              </Nav.Link>
            </Link>

            <Link to="/imprint" className="link-no-style">
              <Nav.Link as="span" eventKey="imprint">
                Impressum
              </Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar