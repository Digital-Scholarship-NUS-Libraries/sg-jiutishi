import React from "react"
import * as styles from "./Footer.module.scss"
import { Nav, Row, Col, Container, ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationArrow,
  faPhoneAlt,
  faEnvelope,
  faCircle,
} from "@fortawesome/free-solid-svg-icons"
import { StaticImage } from "gatsby-plugin-image"

// #TODO add commit hash
// const commitHash = process.env.REACT_APP_VERSION || 'dev'

export default function Footer(props) {
  return (
    <Container className={styles.footer}>
      <Container>
        <Container className={styles.footerTop}>
          <Row>

            <Col xs={4} sm={4} lg={4} className="d-none d-sm-none d-lg-block">
              <h2>Libraries</h2>
              <ListGroup className={styles.footer_listItem}>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries/spaces/our-libraries/central-library"
                  >
                    Central Library
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries/spaces/our-libraries/chinese-library"
                  >
                    Wan Boo Sow Chinese Library (雲茂潮中文图书馆)
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries/spaces/our-libraries/c-j-koh-law-library"
                  >
                    C J Koh Law Library
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries/spaces/our-libraries/hon-sui-sen-memorial-library"
                  >
                    Hon Sui Sen Memorial Library
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries/spaces/our-libraries/medical-library"
                  >
                    Medical Library
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries/spaces/our-libraries/music-library"
                  >
                    Music Library
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries/spaces/our-libraries/science-library"
                  >
                    Science Library
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries/spaces/our-libraries/yale-nus-college-library"
                  >
                    Yale-NUS College Library
                  </a>
                </li>
              </ListGroup>
            </Col>

            <Col xs={4} sm={4} lg={4} className="d-none d-sm-none d-lg-block">
              <h2>Tech Central</h2>
              <ListGroup className={styles.footer_listItem}>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries/services-help/research-support/digital-scholarship"
                  >
                    Digital Scholarship Lab
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries/spaces/tel-imaginarium"
                  >
                    TEL Imaginarium
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://nus.edu.sg/nuslibraries"
                  >
                    360imx (coming soon)
                  </a>
                </li>
              </ListGroup>
            </Col>

            <Col
              xs={12}
              sm={12}
              lg={4}
              className="d-block d-sm-block d-lg-block"
            >
              <Col className={styles.footerMin}>
                <Row className={styles.footerMinContent}>
                  <ListGroup className={styles.footer_listItem}>
                    <h2>NUS Libraries</h2>
                    <li>
                      <FontAwesomeIcon
                        icon={faLocationArrow}
                        className={styles.iconArrow}
                      />
                      <pre className={styles.address}>
                        Central Library{"\n"}
                        12 Kent Ridge Crescent{"\n"}
                        Singapore 119275
                      </pre>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className={styles.icon}
                      />
                      <span>+65 6516 2028</span>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className={styles.icon}
                      />
                      <span>
                        <a href="mailto:askalib@nus.edu.sg" target="_self">
                          askalib@nus.edu.sg
                        </a>
                        <br />
                      </span>
                    </li>
                  </ListGroup>
                  <a href="http://www.lib.nus.edu.sg/">
                    <StaticImage
                      src={"../../images/library_logo_white.png"}
                      alt="NUS Library LOGO"
                      style={{
                        width: "250px",
                        height: "100px",
                        margin: "30px",
                      }}
                      layout="fixed"
                      position="0 0"
                      objectFit="contain"
                    />
                  </a>
                  <a href="https://singaporeccc.org.sg/">
                    <StaticImage
                      src={"../../images/SCCC_logo.png"}
                      alt="SCCC LOGO"
                      style={{
                        width: "250px",
                        height: "100px",
                      }}
                      layout="fixed"
                      position="0 0"
                      objectFit="contain"
                    />
                  </a>
                </Row>

                <Row className={styles.footerMinContent}>
                  <Nav>
                    <Nav.Link
                      href="https://www.facebook.com/NUSLibraries"
                      target="_blank"
                      className={styles.img}
                    >
                      <StaticImage
                        src="../../images/facebook.png"
                        alt="facebook"
                        height={32}
                        width={32}
                        layout="fixed"
                        loading="eager"
                        position="0 0"
                        objectFit="contain"
                      />
                    </Nav.Link>
                    <Nav.Link
                      href="https://twitter.com/NUSlibraries"
                      target="_blank"
                      className={styles.img}
                    >
                      <StaticImage
                        src="../../images/twitter.png"
                        alt="twitter"
                        height={32}
                        width={32}
                        layout="fixed"
                        loading="eager"
                        position="0 0"
                        objectFit="contain"
                      />
                    </Nav.Link>
                    <Nav.Link
                      href="https://instagram.com/nuslibraries"
                      target="_blank"
                      className={styles.img}
                    >
                      <StaticImage
                        src="../../images/instagram.png"
                        alt="instagram"
                        height={32}
                        width={32}
                        layout="fixed"
                        loading="eager"
                        position="0 0"
                        objectFit="contain"
                      />
                    </Nav.Link>
                    <Nav.Link
                      href="http://blog.nus.edu.sg/linus/"
                      target="_blank"
                      className={styles.img}
                    >
                      <StaticImage
                        src="../../images/word.png"
                        alt="word"
                        height={32}
                        width={32}
                        layout="fixed"
                        loading="eager"
                        position="0 0"
                        objectFit="contain"
                      />
                    </Nav.Link>
                    <Nav.Link
                      href="https://www.youtube.com/user/nuslibraries"
                      target="_blank"
                      className={styles.img}
                    >
                      <StaticImage
                        src="../../images/youtube.png"
                        alt="youtube"
                        height={32}
                        width={32}
                        layout="fixed"
                        loading="eager"
                        position="0 0"
                        objectFit="contain"
                      />
                    </Nav.Link>
                    <Nav.Link
                      href="https://www.flickr.com/photos/nuslibraries"
                      target="_blank"
                      className={styles.img}
                    >
                      <StaticImage
                        src="../../images/flickr.png"
                        alt="flickr"
                        height={32}
                        width={32}
                        layout="fixed"
                        loading="eager"
                        position="0 0"
                        objectFit="contain"
                      />
                    </Nav.Link>
                  </Nav>
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className={styles.footerCopyright} style={{ display: "flex" }}>
        <Col>
          <Row className={styles.footerBottom}>
            <p>
              ©
              <a href="http://www.nus.edu.sg">
                National University of Singapore
              </a>
              . All Rights Reserved.
            </p>
          </Row>
          <Row className={styles.footerBottom}>
            <Nav>
              <li>
                <a
                  href="http://www.nus.edu.sg/legal-information-notices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Legal
                </a>
              </li>
              <FontAwesomeIcon icon={faCircle} className={styles.pseudoIcon} />
              <li>
                <a
                  href="http://www.nus.edu.sg/identity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Branding guidelines
                </a>
              </li>
              <FontAwesomeIcon icon={faCircle} className={styles.pseudoIcon} />
              <li>
                <a
                  href="http://www.nus.edu.sg/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us
                </a>
              </li>
              <FontAwesomeIcon icon={faCircle} className={styles.pseudoIcon} />
              <li>
                <a
                  href="http://cn.nus.edu.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  中文
                </a>
              </li>
            </Nav>
          </Row>
        </Col>
      </Container>
    </Container>
  )
}
