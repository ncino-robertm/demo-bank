'use client'

import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Container className="py-5 p-4">
        <Row  className="my-5 py-5">

        </Row>
        <Row>
          <Col>
            <h2>Your Financial Homepage</h2>
          </Col>
        </Row>
        <Row className='pt-4'>
          <Col>
            <h5>Lorem ipsum</h5>
          </Col>
        </Row>
        <Row  className="my-5 py-5">

        </Row>
      </Container>
    </main>
  )
}
