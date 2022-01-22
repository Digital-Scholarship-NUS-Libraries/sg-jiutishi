import * as React from "react"
import { Container } from "react-bootstrap"
import Content from "../components/Content/Content.js"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import HomepageSlider from "../components/Content/HomepageSlider"
import {
  indexMain,
  indexRight,
  indexLeft,
  logoImage,
} from "../../style.module.css"
import HomepageAuthor from "../components/Content/HomepageAuthor"
import HomepageArticle from "../components/Content/HomepageArticle"
import ExternalLink from "../components/Content/ExternalLink"
import { BackToTopButton } from "../components/Content/BackToTopButton.js"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <div>
      <div className={logoImage}>
        <StaticImage src={`../images/logo/logo.png`} alt="logo"></StaticImage>
      </div>

      <Layout>
        <Seo title="主頁" />
        <HomepageSlider></HomepageSlider>
        <Container>
          <div>
            <div className={indexMain}>
              <div className={indexLeft}>
                <HomepageArticle />
              </div>

              <div className={indexRight} style={{ minWidth: "300px" }}>
                <HomepageAuthor />
                <ExternalLink />
              </div>
            </div>
          </div>
          <BackToTopButton></BackToTopButton>
        </Container>

        <Content />
      </Layout>
    </div>
  )
}

export default IndexPage
