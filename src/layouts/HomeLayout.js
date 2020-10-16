import React from "react"
import Layout from "./Layout"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function HomeLayout() {
  const {
    allPosts: { nodes: postsList },
  } = useStaticQuery(graphql`
    {
      allPosts: allMarkdownRemark {
        nodes {
          id
          excerpt(pruneLength: 270)
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM DD YYYY")
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <main>
        {postsList.map(post => {
          return (
            <div key={post.id}>
              <h2>{post.frontmatter.title}</h2>
              <h3>{post.frontmatter.subtitle}</h3>
              <p>
                {post.excerpt}
                <Link to={`/${post.frontmatter.slug}`}>More {`>`}</Link>{" "}
              </p>
              <p>{post.frontmatter.date}</p>
            </div>
          )
        })}
      </main>
    </Layout>
  )
}
