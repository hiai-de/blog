import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Card, Container, Row, Col } from 'react-bootstrap'
import SEO from '../components/seo'
import Layout from '../components/layout'

export const query = graphql`
    query BlogQuery {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYY")
              coverImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            id
            excerpt
          }
        }
      }
    }
`

const createChunks = (array, size) => {
  const chunks = []

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i+size))
  }
  
  return chunks
}

const CoverImage = ({ coverImage }) =>
  coverImage 
    ? <Img className="card-img-top" fluid={coverImage.childImageSharp.fluid} />
    : null

const BlogEntry = ({ node }) => 
  <Card>
    <CoverImage coverImage={node.frontmatter.coverImage} />

    <Card.Body>
      <Card.Title>
        <Link to={`/blog/${node.frontmatter.path}/`} className="stretched-link">
          {node.frontmatter.title}
        </Link>
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{node.frontmatter.date}</Card.Subtitle>
      <Card.Text>{node.excerpt}</Card.Text>
    </Card.Body>
  </Card>

const BlogRow = ({ nodes }) =>
  <Row>
    {
      nodes.map(({node}) => (
        <Col key={node.id} className="pb-3 px-0 pr-lg-3" md={12} lg={4}>
          <BlogEntry node={node} />
        </Col>
      ))
    }
  </Row>

const BlogPage = ({ data }) => {
  const chunks = createChunks(data.allMarkdownRemark.edges, 3)

  return (
    <Layout>
      <SEO title="Blog" />
      
      <Container>
        { chunks.map((x, index) => <BlogRow key={`Row_${index}`} nodes={x} />)}
      </Container>
    </Layout>
  )
}

export default BlogPage