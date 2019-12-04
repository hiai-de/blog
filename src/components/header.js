import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "logo.png"}, sourceInstanceName: {eq: "images"}) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header>
      <Container
        style={{
          paddingBottom: '1.0875rem',
          paddingTop: '1.0875rem',
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md="auto" className="text-center">
              <Img fixed={data.placeholderImage.childImageSharp.fixed} fadeIn={false} loading="eager" />
            </Col>
            <Col className="text-center">
              <h1>
                <Link
                  to="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  {siteTitle}
                </Link>
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
