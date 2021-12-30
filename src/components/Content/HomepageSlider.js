import * as React from "react"
import { Carousel, Image } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

const HomepageSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          style={{ width: "1920px", height: "700px", objectFit: "cover" }}
          src={require(`../../images/slider/slider-3.jpg`).default}
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
              className={"btn btn-outline-light rounded-0"}
              type="button"
              style={{
                margin: "5px",
                borderRadius: "0px !important",
              }}
            >
              Singapore Chinese Cultural Centre
            </button>

            <br />
            <h3 style={{ color: "white" }}>新加坡華族文化中心</h3>
            <br />
            <p style={{ color: "white" }}>贊助</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          style={{ width: "1920px", height: "700px", objectFit: "cover" }}
          src={require(`../../images/slider/slider-1.jpg`).default}
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
              className={"btn btn-outline-light rounded-0"}
              type="button"
              style={{ margin: "5px", borderRadius: "0px !important" }}
            >
              星洲四大才子
            </button>

            <br />
            <h3 style={{ color: "white" }}>李俊承, 邱菽園, 釋瑞于, 葉季允</h3>
            <br />
            <p></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          style={{ width: "1920px", height: "700px", objectFit: "cover" }}
          src={require(`../../images/slider/slider-2.jpg`).default}
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
              className={"btn btn-outline-light rounded-0"}
              type="button"
              style={{ margin: "5px", borderRadius: "0px !important" }}
            >
              烏敏島油畫
            </button>

            <br />
            <h3 style={{ color: "white" }}>何自力 作</h3>
            <br />
            <p style={{ color: "white" }}>新加坡國立大學中文系講師</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomepageSlider
