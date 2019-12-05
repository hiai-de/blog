import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav, Container } from 'react-bootstrap'

const CustomNavbar = ({ pageInfo }) => {
  return (
    <>
      <Navbar variant="dark" id="site-navbar">
        <Container>
          <Nav activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/blog" className="link-no-style" activeClassName="link-active">
              <Nav.Link as="span">
                Blog
              </Nav.Link>
            </Link>

            <Link to="/about" className="link-no-style" activeClassName="link-active">
              <Nav.Link as="span">
                Über uns
              </Nav.Link>
            </Link>

            <Link to="/imprint" className="link-no-style" activeClassName="link-active">
              <Nav.Link as="span">
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