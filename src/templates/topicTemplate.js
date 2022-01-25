import data from "../data/Poem.json"
import topicSliderData from "../data/TopicSlider.json"
import topicData from "../data/Topic.json"
import React from "react"
import { topicMain, logoImage } from "../../style.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Carousel, Image } from "react-bootstrap"
import authors from "../data/Poet.json"
import AuthorDetails from "../components/Content/新洲雅苑懷舊集AuthorDetails"
import { BackToTopButton } from "../components/Content/BackToTopButton.js"
import { Link } from "gatsby"

export default function topicTemplate({ pageContext: { topic } }) {
  function getYear(aut) {
    const getAuthor = authors.filter(author => author.fullName === aut)
    if (getAuthor.length === 0) {
      return ""
    } else if (
      getAuthor[0].yearOfBirth === null &&
      getAuthor[0].yearOfDeath === null
    ) {
      return ""
    } else if (
      getAuthor[0].yearOfBirth === null &&
      getAuthor[0].yearOfDeath !== null
    ) {
      return " ( ? - " + getAuthor[0].yearOfDeath + " )"
    } else if (
      getAuthor[0].yearOfBirth !== null &&
      getAuthor[0].yearOfDeath === null
    ) {
      return " ( " + getAuthor[0].yearOfBirth + " - ? )"
    } else if (getAuthor[0].yearOfDeath === "0") {
      return " ( " + getAuthor[0].yearOfBirth + " - )"
    } else {
      return (
        " ( " +
        getAuthor[0].yearOfBirth +
        " - " +
        getAuthor[0].yearOfDeath +
        " )"
      )
    }
  }
  function getSlideImage() {
    if (topic !== undefined) {
      const getTopic = topicData.filter(
        data => data.chn_name === topic.chn_name
      )
      const slideImageArray = getTopic[0].slider
      return slideImageArray
    }
  }

  function getSlideImageData(photo) {
    const getPhoto = topicSliderData.filter(data => data.slider === photo)
    var dataDict = {}
    dataDict["Tag"] = getPhoto[0].Tag
    dataDict["Title"] = getPhoto[0].Title
    dataDict["Content"] = getPhoto[0].Content
    return dataDict
  }

  function getSortedNYFT() {
    if (topic !== undefined) {
      const filtered = data.filter(data => data.category === topic.chn_name)
      const filteredSort = filtered.sort((x, y) =>
        x.author_name.localeCompare(y.author_name, "zh-CN")
      )
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
      return dict
    }
  }
  const sortedData = getSortedNYFT()
  const slideImage = getSlideImage()
  const final = Object.entries(sortedData)

  function checkZhuanti() {
    const zhuantiList = [
      "雙林寺詩詞",
      "新洲雅苑懷舊集",
      "新加坡大專文學獎--漢詩組得獎作品",
      "國立大學學生作品",
      "南洋大學作品",
      "春聯比賽得獎作品",
      "新加坡楹聯",
      "新加坡舊體詩英譯",
      "雙林寺楹聯錄",
      "郁達夫作品選",
    ]
    return zhuantiList.includes(topic.chn_name) ? true : false
  }

  return (
    <div>
      <img
        src={require(`../images/logo/${topic.logo_url}`).default}
        alt="logo"
        className={logoImage}
      ></img>

      <Layout>
        <Seo title={topic.chn_name} />

        {slideImage && !checkZhuanti() ? (
          <Carousel>
            {slideImage.map((image, i) => (
              <Carousel.Item key={i}>
                <Image
                  className="d-block w-100"
                  style={{
                    width: "1920px",
                    height: "700px",
                    objectFit: "cover",
                  }}
                  src={require(`../images/slider/${image}`).default}
                  alt="First slide"
                />
                {getSlideImageData(image).Tag ||
                getSlideImageData(image).Content ||
                getSlideImageData(image).Title ? (
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
                      {getSlideImageData(image).Tag ? (
                        <button
                          className={"btn btn-outline-light rounded-0"}
                          type="button"
                          style={{
                            margin: "5px",
                            borderRadius: "0px !important",
                          }}
                        >
                          {getSlideImageData(image).Tag}
                        </button>
                      ) : (
                        ""
                      )}
                      <br />
                      <h3 style={{ color: "white" }}>
                        {getSlideImageData(image).Title}
                      </h3>
                      <br />
                      <p style={{ color: "white" }}>
                        {getSlideImageData(image).Content}
                      </p>
                    </div>
                  </Carousel.Caption>
                ) : (
                  ""
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          ""
        )}

        {slideImage && checkZhuanti() ? (
          <Image
            className="d-block w-100"
            style={{
              width: "1920px",
              objectFit: "contain",
            }}
            src={require(`../images/slider/${slideImage[0]}`).default}
            alt="First slide"
          />
        ) : (
          ""
        )}

        <Container>
          <div>
            <div className={topicMain}>
              <div style={{ margin: "30px" }}>
                {topic.blog_img ? (
                  <img
                    src={require(`../images/blog/${topic.blog_img}`).default}
                    alt="blog"
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      marginBottom: "20px",
                    }}
                  ></img>
                ) : (
                  ""
                )}

                <h3 style={{ marginBottom: "20px" }}>{topic.blog_title}</h3>
                <p
                  style={{
                    textAlign: "justify",
                    whiteSpace: "pre-line",
                    verticalAlign: "bottom",
                  }}
                >
                  {topic.blog_content}
                </p>
              </div>

              {final.length !== 0 ? (
                final.map((author, i) => (
                  <div style={{ margin: "30px" }} key={i}>
                    <h4 style={{ marginBottom: "20px" }}>
                      {author[0]}
                      {getYear(author[0])}
                    </h4>
                    {topic.chn_name === "新洲雅苑懷舊集" ? (
                      <AuthorDetails poet={author[0]} />
                    ) : (
                      ""
                    )}

                    {author[1].map((poem, i) => (
                      <Link
                        to={`/poem/${poem.author_name}/${poem.title}`}
                        key={i}
                      >
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
                ))
              ) : (
                <div style={{ textAlign: "center" }}>暫無作品</div>
              )}
            </div>
          </div>
          <BackToTopButton></BackToTopButton>
        </Container>
      </Layout>
    </div>
  )
}
