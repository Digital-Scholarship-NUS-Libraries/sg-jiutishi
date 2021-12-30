import * as React from "react"

const ExternalLink = () => {
  const links = [
    {
      key: 1,
      name: "新加玻華族文化中心",
      url: "https://singaporeccc.org.sg/",
    },
    {
      key: 2,
      name: "隨筆南洋網 - 詩詞雅座",
      url: "http://www.sgwritings.com/bbs/forumdisplay.php?fid=94",
    },
    {
      key: 3,
      name: "全球漢詩總會",
      url: "http://www.gsfccp.com/index.php/list-44.html",
    },
    {
      key: 4,
      name: "紐約《寰球吟壇》",
      url: "https://upoets09.wixsite.com/upoets",
    },
    {
      key: 5,
      name: "新洲雅苑電子書",
      url: "http://sg-jiutishi.com/home#",
    },
  ]
  return (
    <div style={{ margin: "30px" }}>
      <h3>友情鏈接</h3>
      {links.map(link => (
        <a href={link.url}>
          <button
            className={"btn btn-outline-dark rounded-0"}
            type="button"
            style={{
              margin: "5px",
              marginRight: "10px",
              marginLeft: "0px",
              borderRadius: "0px !important",
            }}
          >
            {link.name}
          </button>
        </a>
      ))}
    </div>
  )
}

export default ExternalLink
