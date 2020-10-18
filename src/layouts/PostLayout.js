import React from "react"
import Layout from "./Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function PostLayout({ data }) {
  const {
    markdownRemark: {
      html,
      wordCount: { words },
      excerpt,
      frontmatter: { title, date, subtitle },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <article className="my-8 max-w-screen-md mx-auto">
        <h2 className="text-black font-title font-bold text-3xl my-4 capitalize">
          {title}
        </h2>
        <h3 className="text-black font-title font-normal text-xl my-4">
          {subtitle}
        </h3>
        <p className="text-gray-700 font-body font-normal text-base my-4">
          {date} · {Math.ceil(parseInt(words) / 130) + ` min read`}
        </p>
        <div
          className="prose text-black font-body font-normal text-base lg:text-lg my-8 leading-9 space-y-4"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </article>
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
      excerpt
    }
  }
`
