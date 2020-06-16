
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
    </div>
  )
}

export default UserProfile
