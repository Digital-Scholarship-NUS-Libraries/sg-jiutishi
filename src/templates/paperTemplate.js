import React from "react"
import {
  poemAuthorTitle,
  paperMain,
  logoImage,
  logoImageWrapper,
} from "../../style.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap"
import { BackToTopButton } from "../components/Content/BackToTopButton.js"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Paper({ pageContext: { paper } }) {
  return (
    <div>
      <div className={logoImageWrapper}>
        <StaticImage
          src={`../images/logo/logo-yanjiulunwen.png`}
          alt="logo"
          imgClassName={logoImage}
        ></StaticImage>
      </div>
      <Layout>
        <Seo title={paper.title} />
        <Container>
          <div className={paperMain}>
            <div>
              <h4 className={poemAuthorTitle}>{paper.title}</h4>
              <h6 className={poemAuthorTitle}>{paper.author}</h6>
              <br />

              <iframe
                title={"paper"}
                src={require(`../papers/${paper.link}`).default}
                width="100%"
                height="800px"
              ></iframe>
            </div>
            <br />
            <br />
            <Link
              to={"/others/yanjiulunwen"}
              style={{ alignSelf: "center", marginBottom: "50px" }}
            >
              <button
                className={"btn btn-outline-dark rounded-0"}
                type="button"
              >
                返回上頁
              </button>
            </Link>
          </div>
          <BackToTopButton></BackToTopButton>
        </Container>
      </Layout>
    </div>
  )
}
