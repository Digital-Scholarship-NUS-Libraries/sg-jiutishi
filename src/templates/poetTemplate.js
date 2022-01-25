import * as React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  alphabetList,
  logoImage,
  topicMain,
  logoImageWrapper,
} from "../../style.module.css"
import Poet from "../data/Poet.json"
import { BackToTopButton } from "../components/Content/BackToTopButton.js"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function PoetTemplate({ pageContext: { char } }) {
  const [poets, setPoets] = React.useState([])

  function getPoets() {
    if (char === "全部") {
      const filtered = Poet.filter(poet => char !== poet.pinyin)
      const filteredSortedPinyin = filtered.sort((x, y) =>
        x.fullName.localeCompare(y.fullName, "zh-CN")
      )
      return filteredSortedPinyin
    } else {
      const filtered = Poet.filter(poet => char === poet.pinyin.toUpperCase())
      const filteredSortedPinyin = filtered.sort((x, y) =>
        x.fullName.localeCompare(y.fullName, "zh-CN")
      )
      return filteredSortedPinyin
    }
  }

  React.useEffect(() => {
    setReadingMore(poets.map(x => false))
  }, [poets])

  React.useEffect(() => {
    setPoets(getPoets())
    //eslint-disable-next-line
  }, [])

  const alphabets = [
    "全部",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]

  const [isReadingMore, setReadingMore] = React.useState(null)
  function toggleReadingMore(index) {
    const temp = isReadingMore.map((x, i) => (i === index ? !x : x))
    setReadingMore(temp)
  }

  return (
    <div>
      <div
        // style={{ display: "flex", justifyContent: "center", height: "160px" }}
        className={logoImageWrapper}
      >
        <StaticImage
          src={`../images/logo/logo-shirenjianjie.png`}
          alt="logo"
          imgClassName={logoImage}
        ></StaticImage>
      </div>
      <Layout>
        <Seo title="詩人簡介" />
        <Container>
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                marginTop: "60px",
                marginBottom: "0px",
              }}
            >
              {alphabets.map((alphabet, i) => (
                <Link
                  to={`/poet/${alphabet}`}
                  key={i}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div style={{ padding: "8px 15px" }} className={alphabetList}>
                    {alphabet}
                  </div>
                </Link>
              ))}
            </div>
            <div className={topicMain}>
              {poets.length !== 0 && isReadingMore !== null ? (
                poets.map((poet, i) => (
                  <div key={i} style={{ margin: "30px" }}>
                    <h4 style={{ marginBottom: "20px" }}>{poet.fullName}</h4>
                    {poet.photo_link ? (
                      <div
                        style={{
                          display: isReadingMore[i] ? "flex" : "none",
                          alignItems: "center",
                          flexDirection: "column",
                          margin: "30px 0px",
                        }}
                      >
                        <img
                          src={
                            require(`../images/poet/${poet.photo_link}`).default
                          }
                          style={{ margin: "0px auto 20px", maxWidth: "200px" }}
                          alt={"poet"}
                        ></img>
                        <span>{poet.fullName}先生的照片</span>
                      </div>
                    ) : (
                      ""
                    )}

                    <p
                      style={{
                        whiteSpace: "pre-line",
                        verticalAlign: "bottom",
                      }}
                    >
                      {poet.description.substring(
                        0,
                        poet.description.indexOf("。")
                      )}
                      <span
                        style={{
                          display: isReadingMore[i] ? "none" : "inline",
                          whiteSpace: "pre-line",
                          verticalAlign: "bottom",
                        }}
                      >
                        ......（點擊瀏覽更多）
                      </span>
                      <span
                        style={{
                          display: isReadingMore[i] ? "inline" : "none",
                          whiteSpace: "pre-line",
                          verticalAlign: "bottom",
                        }}
                      >
                        {poet.description.substring(
                          poet.description.indexOf("。")
                        )}
                      </span>
                    </p>
                    <button
                      onClick={
                        () => toggleReadingMore(i)
                        // setReadingMore(isReadingMore[i] ? false : true)
                      }
                      className={"btn btn-outline-dark rounded-0"}
                      id="myBtn"
                      style={{ marginTop: "10px" }}
                    >
                      {isReadingMore[i] ? "折疊內容" : "瀏覽更多"}
                    </button>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: "center" }}>
                  <p>暫無詩人</p>
                </div>
              )}
            </div>
          </div>
          <BackToTopButton></BackToTopButton>
        </Container>
      </Layout>
    </div>
  )
}
