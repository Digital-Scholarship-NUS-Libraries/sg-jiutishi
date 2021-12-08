import React from 'react'
import * as styles from './Content.module.scss'
import { Container, Jumbotron, Col, Row, Card, CardDeck, Button } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"


export default function Content() {

  return (
    <Container className={styles.content}>

        <Jumbotron className={styles.contentHeadline} style={{ marginTop: 0, marginBottom: 20,padding:0 }}>
        <Row>
        <Col md={{ span: 8, offset: 2 }}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at turpis consequat, dictum dolor vel, finibus orci. Vivamus vel fermentum ex, in vehicula dui. Pellentesque feugiat, sapien id lobortis congue, diam mauris ultricies urna, sit amet accumsan lectus urna ac odio. Proin eu dui sit amet felis interdum tristique. Fusce ut mauris vitae ex viverra aliquet. Fusce lacus nunc, finibus vitae orci sit amet, facilisis congue lacus. Vivamus tincidunt massa ut ante lobortis, et auctor ipsum dignissim. Cras a purus orci. Cras tortor sem, scelerisque sed massa eu, malesuada vulputate ex. Vestibulum malesuada nibh sit amet blandit dapibus. Nullam lacinia ultricies nulla, in cursus justo euismod sed. Sed eget suscipit leo.
            </p>

            <Button variant="primary">Button 1</Button>

        </Col>

        </Row>
        </Jumbotron>


      </Container>

  )
}