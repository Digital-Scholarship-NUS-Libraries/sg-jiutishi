import React from "react"
import data from "../../data/Paper.json"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container } from "react-bootstrap"

import { topicMain, logoImage } from "../../../style.module.css"

const 研究論文 = () => {
  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return 1
      else if (a[property] < b[property]) return -1
      return 0
    }
  }
  function getSortedNYFT() {
    const filteredSort = data.sort(sortByProperty("author"))
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
      <img
        src={require(`../../images/logo/logo-yanjiulunwen.png`).default}
        alt="logo"
        className={logoImage}
      ></img>

      <Layout>
        <Seo title="研究論文" />

        <Container>
          <div>
            <div className={topicMain}>
              {final.map((author, i) => (
                <div style={{ margin: "30px" }} key={i}>
                  <h4 style={{ marginBottom: "20px" }}>{author[0]}</h4>

                  {author[1].map((poem, i) => (
                    <a href={`/paper/${poem.author}/${poem.title}`} key={i}>
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
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default 研究論文
