import React from "react"
import Layout from "./Layout"
import { graphql } from "gatsby"

export default function PostLayout({ data }) {
  const {
    markdownRemark: {
      html,
      wordCount: { words },
      frontmatter: { title, date, subtitle },
    },
  } = data
  return (
    <Layout>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {date} · {Math.ceil(parseInt(words) / 130) + ` min read`}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        subtitle
      }
      wordCount {
        words
      }
    }
  }
`
