import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ title, description }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const metaTitle = title || siteMetadata.title
  const metaDescription = description || siteMetadata.description

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name={siteMetadata.author} content={metaDescription}></meta>
    </Helmet>
  )
}
