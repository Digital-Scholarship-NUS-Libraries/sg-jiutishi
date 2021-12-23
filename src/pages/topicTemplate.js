import data from "../data/Poem.json"
import topicData from "../data/Topic.json"
import React from "react"
import { topicMain } from "../../style.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Carousel, Image } from "react-bootstrap"

export default function topicTemplate({ pageContext: { topic } }) {
  function getSlideImage() {
    const getTopic = topicData.filter(data => data.chn_name === topic)
    const slideImageArray = getTopic[0].slider
    console.log(slideImageArray)
    return slideImageArray
  }

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
  const slideImage = getSlideImage()
  const final = Object.entries(sortedData)

  return (
    <Layout>
      <Seo title="Home" />
      <Carousel>
        {slideImage.map((image, i) => (
          <Carousel.Item key={i}>
            <Image
              className="d-block w-100"
              style={{ width: "1920px", height: "700px", objectFit: "cover" }}
              src={require(`../images/slider/${image}`).default}
              alt="First slide"
            />
            <Carousel.Caption style={{ left: "30%", right: "30%" }}>
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  class="btn btn-outline-light rounded-0"
                  type="button"
                  style={{ margin: "5px", borderRadius: "0px !important" }}
                >
                  濱海灣
                </button>
                <br />
                <h4>雙林寺</h4>
                <br />
                <p></p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container>
        <div>
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
        </div>
      </Container>
    </Layout>
  )
}
