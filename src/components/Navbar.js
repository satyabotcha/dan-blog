import React from "react"
import { Link } from "gatsby"

export default function Navbar({ title }) {
  return (
    <React.Fragment>
      <Link to="/">
        <h1 className="text-primary font-title font-bold hover:text-black text-xl">
          {title}
        </h1>
      </Link>
    </React.Fragment>
  )
}
