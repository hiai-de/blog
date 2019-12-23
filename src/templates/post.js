import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap'

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "LL", locale: "de")
        path
        title
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <Container className="blog-post">
        {
          frontmatter.coverImage
            ? <Row className="pb-3"><Col><Img fluid={frontmatter.coverImage.childImageSharp.fluid} /></Col></Row>
            : null
        }

        <Row className="blog-post-title">
          <Col>
            <h1>{frontmatter.title}</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <span>{frontmatter.date}</span>
          </Col>
        </Row>

        <Row className="pt-4">
          <Col>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}