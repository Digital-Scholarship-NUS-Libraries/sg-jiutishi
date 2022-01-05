import React, { useState, useEffect } from "react"
import {
  topicMain,
  logoImage,
  indexVideoPlayer,
} from "../../../style.module.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container } from "react-bootstrap"
import data from "../../data/Video.json"
import ReactPlayer from "react-player"
import authors from "../../data/Poet.json"

const 詩人吟唱 = () => {
  function getYear(aut) {
    const getAuthor = authors.filter(author => author.fullName === aut)
    console.log(getAuthor)
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
      return " ( ?" + " - " + getAuthor[0].yearOfDeath + " )"
    } else if (
      getAuthor[0].yearOfBirth !== null &&
      getAuthor[0].yearOfDeath === null
    ) {
      return " ( " + getAuthor[0].yearOfBirth + " - " + "? )"
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
  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return 1
      else if (a[property] < b[property]) return -1
      return 0
    }
  }
  function getSortedNYFT() {
    const filteredSort = data.sort(sortByProperty("author"))
    var dict = {}
    for (let i = 0; i < filteredSort.length; i++) {
      const video = filteredSort[i]
      if (!video.author) {
        continue
      }
      if (!dict[video.author]) {
        dict[video.author] = new Array(video)
      } else if (dict[video.author]) {
        dict[video.author].push(video)
      }
    }
    console.log(dict)
    return dict
  }

  const [allVid, setAllVid] = useState(Object.entries(getSortedNYFT()))

  const [currVid, setCurrVid] = useState(
    allVid.map(data => data[1][0].link.substring(15))
  )

  function changeCurrVid(link, index) {
    const realLink = link.substring(15)
    console.log(currVid)
    const temp = currVid.map((x, i) => (i === index ? realLink : x))
    setCurrVid(temp)
  }

  return (
    <div>
      <img
        src={require(`../../images/logo/logo-shirenyinchang.png`).default}
        alt="logo image"
        className={logoImage}
      ></img>
      <Layout>
        <Seo title="Home" />
        <Container>
          <div className={topicMain}>
            {allVid !== undefined &&
              allVid.map((data, index) => (
                <div>
                  <h4 style={{ marginTop: "60px" }}>
                    {data[0]}
                    {getYear(data[0])}
                  </h4>

                  <ReactPlayer
                    url={currVid[index]}
                    controls={true}
                    className={indexVideoPlayer}
                  />
                  {data[1].map(video => (
                    <button
                      onClick={() => changeCurrVid(video.link, index)}
                      className={"btn btn-outline-dark rounded-0"}
                      type="button"
                      style={{ margin: "5px", borderRadius: "0px !important" }}
                    >
                      {video.title}
                    </button>
                  ))}
                </div>
              ))}
            <br />
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default 詩人吟唱
