import React from "react"
import Layout from "./Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/SEO"

export default function HomeLayout() {
  const {
    allPosts: { nodes: postsList },
  } = useStaticQuery(graphql`
    {
      allPosts: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
      ) {
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
      <SEO />
      <main className="my-8 max-w-screen-md mx-auto">
        {postsList.length === 0
          ? null
          : postsList.map(post => {
              return (
                <div key={post.id} className="my-8">
                  <Link to={`/${post.frontmatter.slug}`}>
                    <h2 className="text-black font-title font-bold hover:text-primary text-xl my-3 capitalize md:text-2xl">
                      {post.frontmatter.title}
                    </h2>
                  </Link>
                  <h3 className="text-black font-title font-normal text-lg my-3">
                    {post.frontmatter.subtitle}
                  </h3>
                  <p className="text-secondary font-body font-normal text-lg my-3 leading-9">
                    {post.excerpt}
                    <Link
                      to={`/${post.frontmatter.slug}`}
                      className="text-moreBtn font-body font-normal hover:text-black text-base"
                    >
                      {"   "}
                      More{`>`}
                    </Link>
                  </p>
                  <p className="text-secondary font-body font-normal text-base">
                    {post.frontmatter.date}
                  </p>
                </div>
              )
            })}
      </main>
    </Layout>
  )
}
