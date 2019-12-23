import React from 'react'
import { graphql, Link } from 'gatsby'
import { Card, Container, Row, Col } from 'react-bootstrap'
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
            }
            id
            excerpt
          }
        }
      }
    }
`

const createChunks = (array, size) => {
  const chunks = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i+size))
  }
  
  return chunks;
}

const BlogEntry = ({ node }) => 
  <Card>
    <Card.Body>
      <Card.Title>
        <Link to={`/blog/${node.frontmatter.path}/`}>
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
      <h1>Blogartikel</h1>

      <Container>
        { chunks.map((x, index) => <BlogRow key={`Row_${index}`} nodes={x} />)}
      </Container>
    </Layout>
  )
}

export default BlogPage