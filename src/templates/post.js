import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap'
import { FaUser, FaCalendar, FaClock } from 'react-icons/fa'

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "LL", locale: "de")
        path
        title
        author {
          name
        }
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`

const ReadingTime = ({ inMinutes }) => {
  const roundedInMinutes = Math.ceil(inMinutes)

  return <span><FaClock /> {roundedInMinutes} Minute{roundedInMinutes > 1 ? 'n' : ''} Lesezeit</span>
}

const AuthorInfo = ({ author }) =>
  author
    ? <span><FaUser /> {author.name} | </span>
    : <React.Fragment />

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, fields } = markdownRemark

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
            <AuthorInfo author={frontmatter.author} /><span><FaCalendar /> {frontmatter.date}</span> | <ReadingTime inMinutes={fields.readingTime.minutes} />
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