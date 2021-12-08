import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from 'react-bootstrap'
import Content from "../components/Content/Content.js"

import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
    <h1>NUS Libraries Gatsby starter</h1>
    <p>Content incoming.</p>
    </Container>

    <Content />
  </Layout>
)

export default IndexPage
