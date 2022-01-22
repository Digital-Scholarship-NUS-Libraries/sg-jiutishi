import React from "react"
import { topicMain, logoImage } from "../../style.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap"
import { BackToTopButton } from "../components/Content/BackToTopButton.js"
import { StaticImage } from "gatsby-plugin-image"

const 新加坡舊體詩英譯 = () => {
  return (
    <div>
      <div className={logoImage}>
        <StaticImage
          src={`../images/logo/logo-sgjiutishiyingze.png`}
          alt="logo"
          className={logoImage}
        ></StaticImage>
      </div>
      <Layout>
        <Seo title="新加坡舊體詩英譯" />

        <Container>
          <div>
            <div className={topicMain}>
              <div style={{ margin: "30px" }}>
                <h3 style={{ marginBottom: "20px" }}>新加坡舊體詩英譯</h3>
              </div>
              <a href={`/poem/BambooBranchVersesOfSingapore`}>
                <button
                  className={"btn btn-outline-dark rounded-0"}
                  type="button"
                  style={{ margin: "5px", borderRadius: "0px !important" }}
                >
                  新加坡竹枝词英译 Bamboo Branch Verses of Singapore
                </button>
              </a>

              <a href={`/poem/邱菽园竹枝词英译`}>
                <button
                  className={"btn btn-outline-dark rounded-0"}
                  type="button"
                  style={{ margin: "5px", borderRadius: "0px !important" }}
                >
                  邱菽园竹枝词英译
                </button>
              </a>
            </div>
          </div>
          <BackToTopButton></BackToTopButton>
        </Container>
      </Layout>
    </div>
  )
}

export default 新加坡舊體詩英譯
