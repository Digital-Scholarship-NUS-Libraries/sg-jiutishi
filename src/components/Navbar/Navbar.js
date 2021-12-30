import React, { useState } from "react"
import * as styles from "./Navbar.module.scss"
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { navbarControl, navbarControlOriginal } from "../../../style.module.css"

function HoverControlledDropdown(props) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <NavDropdown
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      show={isHovered}
    />
  )
}

export default function NavBar({ menuItems }) {
  const topics = [
    { title: "名勝古跡", url: "名勝古跡" },
    { title: "南洋風土", url: "南洋風土" },
    { title: "星洲風月", url: "星洲風月" },
    { title: "佛語禪心", url: "佛語禪心" },
    { title: "淪陷時期", url: "淪陷時期" },
    { title: "歷史事件", url: "歷史事件" },
    { title: "文藝活動", url: "文藝活動" },
    { title: "詩人簡介", url: "poet/全部" },
  ]

  const zhuantis = [
    { title: "雙林寺詩詞", url: "雙林寺詩詞" },
    { title: "新洲雅苑懷舊集", url: "新洲雅苑懷舊集" },
    {
      title: "新加坡大專文學獎--漢詩組得獎作品",
      url: "新加坡大專文學獎--漢詩組得獎作品",
    },
    { title: "國立大學學生作品", url: "國立大學學生作品" },
    { title: "南洋大學師生作品", url: "南洋大學作品" },
    { title: "春聯比賽得獎作品", url: "春聯比賽得獎作品" },
    { title: "新加坡楹聯", url: "新加坡楹聯" },
    { title: "新加坡舊體詩英譯", url: "新加坡舊體詩英譯" },
    { title: "雙林寺楹聯錄", url: "雙林寺楹聯錄" },
  ]

  const societies = [
    { title: "檀社", url: "檀社作品選" },
    { title: "新聲詩社", url: "新聲詩社早期作品選" },
    { title: "獅城吟社", url: "獅城吟社" },
    { title: "南金詩社", url: "南金詩社" },
    { title: "全球漢詩總會", url: "全球漢詩總會" },
    { title: "其他", url: "詩社" },
  ]

  const handleSelect = eventKey => alert(`selected ${eventKey}`)

  return (
    <Container className={styles.navbar}>
      <Nav style={{ justifyContent: "center" }} className={"me-auto"}>
        <Nav.Item>
          <Nav.Link className={styles.navItem} href="/">
            首頁
          </Nav.Link>
        </Nav.Item>

        <HoverControlledDropdown className={styles.navItem} title="專題">
          {zhuantis.map((zhuanti, i) => (
            <NavDropdown.Item href={`/${zhuanti.url}`} target="_self">
              {zhuanti.title}
            </NavDropdown.Item>
          ))}
        </HoverControlledDropdown>

        {topics.map((topic, i) => (
          <Nav.Item>
            <Nav.Link className={styles.navItem} href={`/${topic.url}`}>
              {topic.title}
            </Nav.Link>
          </Nav.Item>
        ))}

        <HoverControlledDropdown className={styles.navItem} title="詩社">
          {societies.map((society, i) => (
            <NavDropdown.Item href={`/${society.url}`} target="_self">
              {society.title}
            </NavDropdown.Item>
          ))}
        </HoverControlledDropdown>
        <HoverControlledDropdown className={styles.navItem} title="更多">
          <NavDropdown.Item href={`/others/研究論文`} target="_self">
            研究論文
          </NavDropdown.Item>
          <NavDropdown.Item href={`/others/詩人吟唱`} target="_self">
            詩人吟唱
          </NavDropdown.Item>
          <NavDropdown.Item href={`/others/aboutUs`} target="_self">
            關於我們
          </NavDropdown.Item>
        </HoverControlledDropdown>
      </Nav>
    </Container>
  )
}
