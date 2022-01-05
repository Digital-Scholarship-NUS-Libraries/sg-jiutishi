import React, { useState } from "react"
import {
  poemDiv,
  poemAuthorTitle,
  poemContent,
  paperMain,
  logoImage,
} from "../../style.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap"

export default function Paper({ pageContext: { paper } }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }
  return (
    <div>
      <img
        src={require(`../images/logo/logo-yanjiulunwen.png`).default}
        alt="logo image"
        className={logoImage}
      ></img>
      <Layout>
        <Seo title="Home" />
        <Container>
          <div className={paperMain}>
            <div>
              <h4 className={poemAuthorTitle}>{paper.title}</h4>
              <h6 className={poemAuthorTitle}>{paper.author}</h6>
              <br />

              <iframe
                src={require(`../papers/${paper.link}`).default}
                width="100%"
                height="800px"
              ></iframe>
            </div>
            <br />
            <br />
            <a
              href={`/others/研究論文`}
              style={{ alignSelf: "center", marginBottom: "50px" }}
            >
              <button
                className={"btn btn-outline-dark rounded-0"}
                type="button"
              >
                返回上頁
              </button>
            </a>
          </div>
        </Container>
      </Layout>
    </div>
  )
}
