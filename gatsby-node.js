const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
      {
        posts: allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  
  if (result.errors) {
    console.error(result.errors)
  }
  
  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: path.resolve('src/templates/post.js'),
      context: {
        id: node.id
      }
    })
  })
}