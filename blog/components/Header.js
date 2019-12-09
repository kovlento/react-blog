import React from 'react'
import '../public/style/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'

const Header=()=>(
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <span className="header-logo">Kovlento <span className="header-txt">Javascript全栈爱好者</span></span>
      </Col>
      <Col xs={0} sm={0} md={12} lg={12} xl={12}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Icon type="home" />
            首页
          </Menu.Item>
          <Menu.Item key="video">
            <Icon type="youtube" />
            视频
          </Menu.Item>
          <Menu.Item key="life">
            <Icon type="smile" />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header