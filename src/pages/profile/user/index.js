
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Button
} from 'antd';
import {
  MailOutlined,
  CaretLeftOutlined,
  CaretRightOutlined
} from '@ant-design/icons'

import DetailCard from './components/DetailCard'
import UserProfileCard from './components/UserProfile'

import styles from './index.less'

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
          <Col flex="362px">
            <UserProfileCard/>
          </Col>
          <Col flex="auto">
            <DetailCard/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default UserProfile
