import React, { useState } from "react"
import * as styles from "./Navbar.module.scss"
import { Container, Nav, NavDropdown } from "react-bootstrap"
import { Link, navigate } from "gatsby"

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
    { title: "名勝古跡", url: "mingshengguji" },
    { title: "南洋風土", url: "nanyangfengtu" },
    { title: "星洲風月", url: "xingzhoufengyue" },
    { title: "佛語禪心", url: "foyuchanxin" },
    { title: "淪陷時期", url: "lunxianshiqi" },
    { title: "歷史事件", url: "lishishijian" },
    { title: "文藝活動", url: "wenyihuodong" },
    { title: "詩人簡介", url: "poet/All" },
  ]

  const zhuantis = [
    { title: "雙林寺詩詞", url: "zhuanti-shuanglin" },
    { title: "新洲雅苑懷舊集", url: "zhuanti-xinzhouyayuan" },
    {
      title: "新加坡大專文學獎--漢詩組得獎作品",
      url: "zhuanti-dazhuan",
    },
    { title: "國立大學學生作品", url: "zhuanti-nus" },
    { title: "南洋大學師生作品", url: "zhuanti-nanyangdaxue" },
    { title: "春聯比賽得獎作品", url: "zhuanti-chunlian" },
    { title: "新加坡楹聯", url: "zhuanti-sgyinglian" },
    { title: "新加坡舊體詩英譯", url: "XinJiaPoJiuTiShiYingYi" },
    { title: "雙林寺楹聯錄", url: "ShuangLinSiYingLianLu" },
    { title: "郁達夫作品選", url: "yudafu" },
  ]

  const societies = [
    { title: "檀社", url: "tanshe" },
    { title: "新聲詩社", url: "xinshengshishe" },
    { title: "獅城吟社", url: "shichengyinshe" },
    { title: "南金詩社", url: "nanjinshishe" },
    { title: "全球漢詩總會", url: "quanqiuhanshizonghui" },
    { title: "其他", url: "shishe" },
  ]

  return (
    <Container className={styles.navbar}>
      <Nav style={{ justifyContent: "center" }} className={"me-auto"}>
        <Nav.Item>
          <Nav.Link className={styles.navItem} onClick={() => navigate("/")}>
            <Link style={{ textDecoration: "none" }} to="/">
              首頁
            </Link>
          </Nav.Link>
        </Nav.Item>

        <HoverControlledDropdown className={styles.navItem} title="專題">
          {zhuantis.map((zhuanti, i) => (
            <NavDropdown.Item
              key={i}
              target="_self"
              onClick={() => navigate(`/${zhuanti.url}`)}
            >
              <Link style={{ textDecoration: "none" }} to={`/${zhuanti.url}`}>
                {zhuanti.title}
              </Link>
            </NavDropdown.Item>
          ))}
        </HoverControlledDropdown>

        {topics.map((topic, i) => (
          <Nav.Item key={i}>
            <Nav.Link
              className={styles.navItem}
              onClick={() => navigate(`/${topic.url}`)}
            >
              <Link style={{ textDecoration: "none" }} to={`/${topic.url}`}>
                {topic.title}
              </Link>
            </Nav.Link>
          </Nav.Item>
        ))}

        <HoverControlledDropdown className={styles.navItem} title="詩社">
          {societies.map((society, i) => (
            <NavDropdown.Item
              key={i}
              onClick={() => navigate(`/${society.url}`)}
              target="_self"
            >
              <Link style={{ textDecoration: "none" }} to={`/${society.url}`}>
                {society.title}
              </Link>
            </NavDropdown.Item>
          ))}
        </HoverControlledDropdown>
        <HoverControlledDropdown className={styles.navItem} title="更多">
          <NavDropdown.Item
            onClick={() => navigate(`/others/yanjiulunwen`)}
            target="_self"
          >
            <Link
              style={{ textDecoration: "none" }}
              to={"/others/yanjiulunwen"}
            >
              研究論文
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item
            target="_self"
            onClick={() => navigate(`/others/shirenyinchang`)}
          >
            <Link
              style={{ textDecoration: "none" }}
              to={"/others/shirenyinchang"}
            >
              詩人吟唱
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item
            target="_self"
            onClick={() => navigate(`/others/aboutUs`)}
          >
            <Link style={{ textDecoration: "none" }} to={"/others/aboutUs"}>
              關於我們
            </Link>
          </NavDropdown.Item>
        </HoverControlledDropdown>
      </Nav>
    </Container>
  )
}
