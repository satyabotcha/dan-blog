import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="md:m-12 m-6">
      <Navbar title={title} />
      {children}
    </div>
  )
}
