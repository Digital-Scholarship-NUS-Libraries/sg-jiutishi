import { homepageAuthor, homepageAuthorImage } from "../../../style.module.css"
import * as React from "react"

const authors = [
  {
    key: 1,
    name: "邱菽園",
    description:
      "邱菽園（1874-1941），本姓丘，其先祖在清初因避孔子諱改作邱。初名徵蘭，後改名煒萲，字萱娛，號菽園、嘯虹生、星洲寓公。福建海澄人。父邱篤信，為新加坡富商，經營米業。菽園1881年至新加坡，1888年隨母返海澄，參加童子試。是年賦〈玉笛詩〉，為師友推重，呼之為「邱玉笛」。......",
    signature: "signature-image.png",
    collectionName: "邱菽園詩選",
    collectionURL: "/邱菽園詩選",
    poetPicture: "poet-qiushuyuan.png",
  },
  {
    key: 2,
    name: "潘受",
    description:
      "潘受（1911-1999），原名潘國渠。字虛之，福建南安人。潘受為其筆名。1930年南渡新加坡，初任《叻報》編輯。1931年任崇正學校校長。其後執教於華僑中學、道南學校及馬來亞麻坡中華中學。1937年任陳嘉庚組織的「南洋華僑籌賑祖國難民總會」主任秘書。......",
    signature: null,
    collectionName: "潘受作品選",
    collectionURL: "/潘受作品選",
    poetPicture: "poet-panshou.jpg",
  },
  {
    key: 3,
    name: "左秉隆",
    description:
      "左秉隆 (1850-1924)，字子興，別署“炎洲冷宦”，遠祖原籍瀋陽，入清改隸漢軍正黃旗，駐防廣州。他曾任北京同文館英文兼數學副教習。1879年，他隨曾紀澤出使英、法等國，任駐英使署三等翻譯官。1881至1891年，被任為清朝派駐新加坡首任正式領事官。.......",
    signature: null,
    collectionName: "左秉隆詩選",
    collectionURL: "/左秉隆詩選",
    poetPicture: "poet-zuobinglong.jpg",
  },
  {
    key: 4,
    name: "黃遵憲",
    description:
      "黃遵憲（1848-1905），字公度，别號人境廬主人。廣東嘉應州人，晚清著名詩人、外交家。其自光绪三年入仕以來，歷任中國駐日使館參贊、駐美三藩市總領事，駐英使館參贊、駐新加坡總領事。......",
    signature: null,
    collectionName: "黃遵憲詩選",
    collectionURL: "/黃遵憲詩選",
    poetPicture: "poet-huangzunxian.jpg",
  },
]

const HomepageAuthor = () => {
  return (
    <div>
      {authors.map((author, i) => (
        <div key={i} className={homepageAuthor}>
          <img
            src={require(`../../images/poet/${author.poetPicture}`).default}
            className={homepageAuthorImage}
            alt="poet profile"
          ></img>
          <h4>{author.name}</h4>
          <br />
          <p style={{ textAlign: "left" }}>{author.description}</p>

          {author.signature ? (
            <div>
              <img
                src={require(`../../images/poet/${author.signature}`).default}
                alt={"author signature"}
              ></img>
              <br />
            </div>
          ) : (
            ""
          )}
          <br />
          <a href={`${author.collectionURL}`}>
            <button className={"btn btn-outline-dark rounded-0"}>
              {author.collectionName}
            </button>
          </a>
        </div>
      ))}
    </div>
  )
}

export default HomepageAuthor
