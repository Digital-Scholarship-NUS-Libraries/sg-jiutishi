import data from "../data/Poem.json"
import topicSliderData from "../data/TopicSlider.json"
import topicData from "../data/Topic.json"
import React from "react"
import { topicMain, logoImage } from "../../style.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Carousel, Image } from "react-bootstrap"

const 新加坡舊體詩英譯 = () => {
  return (
    <div>
      <img
        src={require(`../images/logo/logo-sgjiutishiyingze.png`).default}
        alt="logo image"
        className={logoImage}
      ></img>
      <Layout>
        <Seo title="Home" />

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
        </Container>
      </Layout>
    </div>
  )
}

export default 新加坡舊體詩英譯
