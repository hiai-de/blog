import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query BlogQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
            }
            id
            excerpt
          }
        }
      }
    }
`

const BlogPage = ({ data }) => (
  <Layout>
    <main>
      <h1>Blogartikel</h1>

      <ul>
        {
          data.allMarkdownRemark.edges.map(({ node }) =>
            <li key={node.id}>
              <Link to={`/blog/${node.frontmatter.path}/`}>
                {node.frontmatter.title}
              </Link>
              <br />
              <span>{node.excerpt}</span>
            </li>)
        }
      </ul>
    </main>
  </Layout>
)

export default BlogPage