import React from "react"
import data from "../../data/Paper.json"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container } from "react-bootstrap"
import { BackToTopButton } from "../../components/Content/BackToTopButton.js"

import {
  topicMain,
  logoImage,
  logoImageWrapper,
} from "../../../style.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const 研究論文 = () => {
  function getSortedNYFT() {
    // const filteredSort = data.sort(sortByProperty("author"))
    const filteredSort = data.sort((x, y) =>
      x.author.localeCompare(y.author, "zh-CN")
    )
    var dict = {}
    for (let i = 0; i < filteredSort.length; i++) {
      const poem = filteredSort[i]
      if (!poem.author) {
        continue
      }
      if (!dict[poem.author]) {
        dict[poem.author] = new Array(poem)
      } else if (dict[poem.author]) {
        dict[poem.author].push(poem)
      }
    }
    return dict
  }
  const sortedData = getSortedNYFT()
  const final = Object.entries(sortedData)

  return (
    <div>
      <div className={logoImageWrapper}>
        <StaticImage
          src={`../../images/logo/logo-yanjiulunwen.png`}
          alt="logo"
          imgClassName={logoImage}
        ></StaticImage>
      </div>

      <Layout>
        <Seo title="研究論文" />

        <Container>
          <div>
            <div className={topicMain}>
              {final.map((author, i) => (
                <div style={{ margin: "30px" }} key={i}>
                  <h4 style={{ marginBottom: "20px" }}>{author[0]}</h4>

                  {author[1].map((poem, i) => (
                    <Link to={`/paper/${poem.author}/${poem.title}`} key={i}>
                      <button
                        className={"btn btn-outline-dark rounded-0"}
                        type="button"
                        style={{
                          margin: "5px",
                          borderRadius: "0px !important",
                        }}
                      >
                        {poem.title}
                      </button>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <BackToTopButton></BackToTopButton>
        </Container>
      </Layout>
    </div>
  )
}

export default 研究論文
