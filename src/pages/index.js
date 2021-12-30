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

const IndexPage = () => {
  return (
    <div>
      <img
        src={require(`../images/logo/logo.png`).default}
        alt="logo image"
        className={logoImage}
      ></img>

      <Layout>
        <Seo title="Home" />
        <HomepageSlider></HomepageSlider>
        <Container>
          <div>
            <div class="row" className={indexMain}>
              <div class="col-8" className={indexLeft}>
                <HomepageArticle />
              </div>

              <div
                class="col-4"
                className={indexRight}
                style={{ minWidth: "300px" }}
              >
                <HomepageAuthor />
                <ExternalLink />
              </div>
            </div>
          </div>
        </Container>

        <Content />
      </Layout>
    </div>
  )
}

export default IndexPage
