import data from "../data/Poem.json"
import React from "react"
import { topicMain } from "../../style.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap"

export default function topicTemplate({ pageContext: { topic } }) {
  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return 1
      else if (a[property] < b[property]) return -1
      return 0
    }
  }
  function getSortedNYFT() {
    const filtered = data.filter(data => data.category === topic)
    const filteredSort = filtered.sort(sortByProperty("author_name"))
    var dict = {}
    for (let i = 0; i < filteredSort.length; i++) {
      const poem = filteredSort[i]
      if (!poem.author_name) {
        continue
      }
      if (!dict[poem.author_name]) {
        dict[poem.author_name] = new Array(poem)
      } else if (dict[poem.author_name]) {
        dict[poem.author_name].push(poem)
      }
    }
    console.log(dict)
    return dict
  }
  const sortedData = getSortedNYFT()
  const final = Object.entries(sortedData)
  console.log(final)
  return (
    <Layout>
      <Seo title="Home" />
      <Container>
        <div className={topicMain}>
          {final.map((author, i) => (
            <div style={{ margin: "30px" }}>
              <h4 style={{ marginBottom: "20px" }}>{author[0]}</h4>

              {author[1].map(poem => (
                <a href={`/poem/${poem.author_name}/${poem.title}`}>
                  <button
                    class="btn btn-outline-dark rounded-0"
                    type="button"
                    style={{ margin: "5px", borderRadius: "0px !important" }}
                  >
                    {poem.title}
                  </button>
                </a>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
