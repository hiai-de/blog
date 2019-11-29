const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
      {
        posts: allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
              id
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
      path: `/blog${node.frontmatter.path}`,
      component: path.resolve('src/templates/post.js'),
      context: {
        id: node.id
      }
    })
  })
}