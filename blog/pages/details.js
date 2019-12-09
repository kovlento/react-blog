import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import Header from '../components/Header'

const Details = () => (
  <div>
    <Head>
      <title>Details</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
      Details左侧
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
      Details右侧
      </Col>
    </Row>
  </div>
)

export default Details
