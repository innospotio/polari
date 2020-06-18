
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  Menu,
  Avatar,
  Button,
  Dropdown
} from 'antd';
import {
  AppleFilled,
  SkypeFilled,
  PhoneFilled,
  MailOutlined,
  PlusOutlined,
  CheckOutlined,
  EllipsisOutlined,
  CaretLeftOutlined,
  CaretRightOutlined
} from '@ant-design/icons'

import DetailCard from './components/DetailCard'
import UserProfileCard from './components/UserProfile'

import styles from './index.less'

const { Meta } = Card

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

const UserProfile = () => {

  return (
    <div className={styles.userProfileWrap}>
      <Row>
        <Col span={12}>
          <Button size="small" className={styles.actionBtn}>
            <CaretLeftOutlined style={{color: '#8C8C8C'}} />
          </Button>
          <Button size="small" className={styles.actionBtn}>
            <CaretRightOutlined style={{color: '#8C8C8C'}} />
          </Button>
        </Col>
        <Col span={12} className={styles.rightBtnWrap}>
          <Button>
            <MailOutlined/> SendEmail
          </Button>
          <Button type="primary">
            Actions...
          </Button>
        </Col>
      </Row>
      <div className={styles.contentWrap}>
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <UserProfileCard/>
          </Col>
          <Col flex="auto">
            <DetailCard/>
          </Col>
        </Row>

        <Row gutter={[24, 24]}>
          <Col span={8}>

            <Card bordered={false} className={styles.contactCard}>
              <div className={styles.menu}>
                <Dropdown
                  overlay={menu}
                  trigger={['click']}
                >
                  <a onClick={e => e.preventDefault()}>
                    <EllipsisOutlined style={{fontSize: '20px', color: '#8C8C8C'}} />
                  </a>
                </Dropdown>
              </div>
              <Meta
                avatar={<Avatar style={{color: '#03a9f4', background: '#F5F5F5', fontSize: 26}} size={40} icon={<SkypeFilled />} />}
                title={<span style={{lineHeight: '40px'}}>Skype</span>}
              />
              <Row className={styles.bottom} justify="space-between">
                <Col>
                  <p className={styles.title}>Claudia Mills</p>
                  <a href="#">claudia.mills</a>
                </Col>
                <Col>
                  <Avatar
                    size={40}
                    icon={<PhoneFilled />}
                    style={{color: '#1245FA', background: '#E5EDFF', fontSize: 16}}
                  />
                </Col>
              </Row>
            </Card>

          </Col>
          <Col span={8}>

            <Card bordered={false} className={styles.contactCard}>
              <div className={styles.menu}>
                <Dropdown
                  overlay={menu}
                  trigger={['click']}
                >
                  <a onClick={e => e.preventDefault()}>
                    <EllipsisOutlined style={{fontSize: '20px', color: '#8C8C8C'}} />
                  </a>
                </Dropdown>
              </div>
              <Meta
                avatar={<Avatar size={40} style={{color: '#000', background: '#F5F5F5', fontSize: 26}} icon={<AppleFilled />} />}
                title={<span style={{lineHeight: '40px'}}>Apple</span>}
              />
              <Row className={styles.bottom} justify="space-between">
                <Col>
                  <p className={styles.title}>&nbsp;</p>
                  <a href="#">info@claudia.mills.com</a>
                </Col>
                <Col>
                  <Avatar
                    size={40}
                    icon={<CheckOutlined />}
                    style={{color: '#31CB8A', background: '#DBF4EC'}}
                  />
                </Col>
              </Row>
            </Card>

          </Col>
          <Col span={8}>
            <Card className={styles.addCard}>
              <Row justify="center" align="middle">
                <Col>
                  <PlusOutlined style={{fontSize: 20}} />
                  <p>Add widget</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default UserProfile
