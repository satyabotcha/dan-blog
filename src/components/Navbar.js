import React from "react"
import { Link } from "gatsby"

export default function Navbar({ title }) {
  return (
    <div>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
    </div>
  )
}
