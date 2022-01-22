import React from "react"
import {
  poemDiv,
  poemAuthorTitle,
  poemMain,
  logoImage,
} from "../../style.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Table } from "react-bootstrap"
import data from "../components/Content/雙林寺楹聯錄Data"
import { BackToTopButton } from "../components/Content/BackToTopButton.js"
import { StaticImage } from "gatsby-plugin-image"

const 雙林寺楹聯錄 = () => {
  return (
    <div>
      <div className={logoImage}>
        <StaticImage
          src={`../images/logo/logo-shuanglinsiyinglianlu.png`}
          alt="logo"
        ></StaticImage>
      </div>
      <Layout>
        <Seo title="雙林寺楹聯錄" />
        <Container>
          <div className={poemMain}>
            <div className={poemDiv}>
              <h4 className={poemAuthorTitle}>双林寺楹联录</h4>
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "0.85rem",
                }}
              >
                此目录主要据Kenneth Dean （丁荷生）与Hue Guan Thye（许源泰）所著
                Chinese Epigraphy in Singapore
                一书录入，另加入楹联所在位置、“题撰人/书法家”与“附注”等资料。
              </span>
              <br />
              <Table bordered hover size="sm" style={{ marginTop: "20px" }}>
                <thead>
                  <tr>
                    <th> </th>
                    <th>楹联內容</th>
                    <th>年份</th>
                    <th>位置</th>
                    <th>题撰人/书法家</th>
                    <th>附注</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((entry, i) => (
                    <tr key={i}>
                      <td>{entry.key}</td>
                      <td
                        style={{
                          whiteSpace: "pre-line",
                          verticalAlign: "bottom",
                        }}
                      >
                        {entry.content}
                      </td>
                      <td>{entry.year}</td>
                      <td>{entry.location}</td>
                      <td>{entry.poet}</td>
                      <td>{entry.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <a href={`/`} style={{ alignSelf: "center", marginBottom: "50px" }}>
              <button
                className={"btn btn-outline-dark rounded-0"}
                type="button"
              >
                返回上頁
              </button>
            </a>
          </div>
          <BackToTopButton></BackToTopButton>
        </Container>
      </Layout>
    </div>
  )
}

export default 雙林寺楹聯錄
