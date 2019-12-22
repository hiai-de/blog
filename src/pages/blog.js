import React from 'react'
import { graphql, Link } from 'gatsby'
import { Container, CardDeck, Card } from 'react-bootstrap'
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

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Blogartikel</h1>

    { data.allMarkdownRemark.edges.map(({ node }) => <BlogEntry key={node.id} node={node} />) }
  </Layout>
)

export default BlogPage