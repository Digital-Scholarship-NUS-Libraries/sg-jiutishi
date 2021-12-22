import React from "react"
import {
  poemDiv,
  poemAuthorTitle,
  poemContent,
  poemMain,
} from "../../style.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap"

export default function Poem({ pageContext: { poem } }) {
  return (
    <Layout>
      <Seo title="Home" />
      <Container>
        <div className={poemMain}>
          <div className={poemDiv}>
            <h4 className={poemAuthorTitle}>{poem.title}</h4>
            <h6 className={poemAuthorTitle}>{poem.author_name}</h6>
            <p className={poemContent}>{poem.content}</p>
            <br />
            <h6 className={poemAuthorTitle}>{poem.published_info}</h6>
          </div>
          <a
            href={`/${poem.category}`}
            style={{ alignSelf: "center", marginBottom: "50px" }}
          >
            <button class="btn btn-outline-dark rounded-0" type="button">
              Back to the previous page
              {/* <a href="/nanyangfengtu" className={poemGoBackLink}></a> */}
            </button>
          </a>
        </div>
      </Container>
    </Layout>
  )
}
