import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Style from "./kv.module.scss"

const Kv = () => {
  return (
    <div className={Style.wrap}>
      <div className={Style.overlay}>
        <Container className={Style.content}>
          <Row>
            <Col sm={12} className="mx-auto">
              <div className={Style.siteHeading}>
                <h1>Gatsby Blog</h1>
                <span>A Blog By Gatsby.js</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Kv
