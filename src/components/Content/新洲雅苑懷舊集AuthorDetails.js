import React from "react"
import { poemDiv, poemContent } from "../../../style.module.css"
import authors from "../../data/Poet.json"

export default function AuthorDetails(poet) {
  function getAuthor() {
    const filtered = authors.filter(author => author.fullName === poet.poet)
    return filtered[0].description
  }

  const foundAuthor = getAuthor()

  return (
    <div
      className={poemDiv}
      style={{ marginLeft: "0px", marginTop: "50px", marginBottom: "50px" }}
    >
      <p className={poemContent}>{foundAuthor}</p>
    </div>
  )
}
