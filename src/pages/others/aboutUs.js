import * as React from "react"
import { Container } from "react-bootstrap"
import Content from "../../components/Content/Content.js"
import ReactPlayer from "react-player"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  indexMain,
  indexRight,
  indexLeft,
  poemDiv,
  homepageAuthor,
  homepageAuthorImage,
  poemAuthorTitle,
  logoImage,
} from "../../../style.module.css"

const books = [
  {
    key: 1,
    cover: "",
    publisher: "香港中文大學出版社",
    title: "滄海遺音：民國時期清遺民詞研究",
    year: "?",
  },
  {
    key: 2,
    cover: "",
    publisher: "臺北：臺灣學生書局",
    title: "二十世紀十大家詞選",
    year: "2008",
  },
  {
    key: 3,
    cover: "",
    publisher: "臺北：稻鄉出版社",
    title: "清十大家詞選",
    year: "2003",
  },
  {
    key: 4,
    cover: "",
    publisher: "香港：天地圖書",
    title: "獅城心影錄：中大人在新加坡",
    year: "2013",
  },
]

const AboutUs = () => {
  return (
    <div>
      <img
        src={require(`../../images/logo/logo-aboutus.png`).default}
        alt="logo image"
        className={logoImage}
      ></img>
      <Layout>
        <Seo title="Home" />
        <Container>
          <div>
            <div class="row" className={indexMain}>
              <div class="col-8" className={indexLeft}>
                <div
                  className={poemDiv}
                  style={{ width: "100%", margin: "0px" }}
                >
                  <h4 className={poemAuthorTitle}>網站建設團隊</h4>
                  <h6 className={poemAuthorTitle}>網站主編: 林立</h6>
                  <h6 className={poemAuthorTitle}>
                    網站內容編輯: 潘曉君，魏梓昂，鄭文鎬，林恩齊
                  </h6>
                </div>
                <div style={{ margin: "30px" }}>
                  <p>
                    此網站建立於2020年，由新加坡華族文化中心贊助，旨在弘揚南洋舊體詩文化，促進文化交流。
                    <br />
                    以下是 新加坡華族文化中心宣傳片
                  </p>
                  <ReactPlayer
                    style={{ marginBottom: "30px", width: "100%" }}
                    url={"https://www.youtube.com/watch?v=Kl2t-6Zv6yI"}
                  ></ReactPlayer>
                </div>
              </div>

              <div
                class="col-4"
                className={indexRight}
                style={{ minWidth: "300px" }}
              >
                <div className={homepageAuthor}>
                  <img
                    src={require(`../../images/img-prof.jpg`).default}
                    className={homepageAuthorImage}
                  ></img>
                  <h4>Lam Lap(林立)</h4>
                  <p>
                    新加坡國立大學副教授。新加坡舊體詩庫網站創辦人。
                    <br />
                    出版著作： <br />
                    1.《滄海遺音：民國時期清遺民詞研究》，香港：香港中文大學出版社。{" "}
                    <br />
                    2.《二十世紀十大家詞選》(合著)，臺北：臺灣學生書局，2008年。{" "}
                    <br />
                    3.《清十大家詞選》(合著)，臺北：稻鄉出版社，2003年。 <br />
                    4.《獅城心影錄：中大人在新加坡》(主編)，香港：天地圖書，2013年。
                  </p>

                  <img
                    src={
                      require(`../../images/poet/signature-image.png`).default
                    }
                  ></img>
                  <br />
                  <a href={`/aboutUs`}>
                    <button class="btn btn-outline-dark rounded-0">
                      Read More
                    </button>
                  </a>
                </div>
                <div>
                  <h3>出版著作</h3>
                  {books.map((book, i) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "30px 0px",
                      }}
                    >
                      <img
                        src={
                          require(`../../images/aboutme-bookcover-1.jpg`)
                            .default
                        }
                        style={{ width: "80px", height: "20%" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "10px",
                        }}
                      >
                        <a href={`/aboutUs`}>
                          <button class="btn btn-outline-dark rounded-0">
                            {book.publisher}
                          </button>
                        </a>
                        <span style={{ margin: "10px 0px" }}>{book.title}</span>
                        <i>{book.year}</i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Content />
      </Layout>
    </div>
  )
}

export default AboutUs
