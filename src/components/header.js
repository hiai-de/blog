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
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header>
      <Container
        style={{
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
      >
        <Container className="p-0">
          <Row className="align-items-center">
            <Col xs={3}>
              <Img fluid={data.placeholderImage.childImageSharp.fluid} fadeIn={false} loading="eager" />
            </Col>
            <Col xs={9} className="text-center">
              <h1 className="header-title">
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
