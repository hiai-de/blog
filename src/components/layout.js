import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import Header from './header'
import Navbar from './navbar'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            title
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Container fluid className="px-0 main">
        <Row noGutters className="justify-content-center">
          <Col>
            <Header siteTitle={data.site.siteMetadata.title} />
          </Col>
        </Row>
        
        <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
        
        <Row noGutters>
          <Col>
            <Container className="mt-5">
              <main>{children}</main>
            </Container>
          </Col>
        </Row>
      </Container>
      
      <Container fluid className="px-0">
        <Row noGutters>
          <Col className="footer-col">
            <footer>
              <span>
                  © {new Date().getFullYear()} {data.site.siteMetadata.title}
              </span>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
