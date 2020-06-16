
import React, { useState } from 'react';
import {
  Tag,
  Row,
  Col,
  Rate,
  Card,
  Avatar,
  Divider
} from 'antd';
import {
  FireOutlined
} from '@ant-design/icons'

import styles from './index.less'

const tags = ['test tag', 'another tag', 'something tag', 'test tag', 'another tag', 'something tag']

const UserProfileCard = () => {

  return (
    <Card bordered={false}>
      <div className={styles.userMessage}>
        <Avatar
          size={110}
          src="http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290" />
        <p className={styles.name}>Jackie Richards</p>
        <p className={styles.email}>trungkienspktnd@gamail.com</p>

        <Row justify="center" className={styles.rate}>
          <Col flex="106px">
            <Rate disabled defaultValue={4} style={{marginTop: 2}} />
          </Col>
          <Col flex="40px">
            <Divider type="vertical" style={{borderLeft: '2px solid #E8E8E8', height: 32}} />
          </Col>
          <Col>
            <FireOutlined style={{fontSize: 18, color: '#FF4445', marginTop: 4}} />
            <span className={styles.n}>128</span>
          </Col>
        </Row>
      </div>

      <Divider />

      <div className={styles.infoBlock}>
        <div className={styles.block}>
          <p className={styles.title}>Contact Information</p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>Email Address:</p>
          <p className={styles.value}>michelle.rivera@example.com</p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>Phone Number:</p>
          <p className={styles.value}>022-634-1573</p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>Address:</p>
          <p className={styles.value}>West End 45th Stree,San Francisco 90123 California,US</p>
        </div>
      </div>

      <Divider />

      <div className={styles.infoBlock}>
        <div className={styles.block}>
          <p className={styles.title}>Custom Information</p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>Facebook:</p>
          <p className={styles.value}>facebook.com/caludiamills</p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>Personal Phone Number:</p>
          <p className={styles.value}>022-634-1573</p>
        </div>
      </div>

      <Divider />

      <div className={styles.tagWrap}>
        <div className={styles.block}>
          <p className={styles.title}>Tags</p>
        </div>
        <div>
          {
            tags.map((tag, index) => (
              <Tag closable key={index}>
                {tag}
              </Tag>
            ))
          }
        </div>
      </div>

      <div className={styles.ownerWrap}>
        <Avatar
          size={24}
          src="http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853" />
        <span className={styles.ts}>
          <span className={styles.t}>Owner:</span>
          <span className={styles.d}>Mark Hansen </span>
        </span>
      </div>
    </Card>
  )
}

export default UserProfileCard
