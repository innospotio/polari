
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Tag,
  Card,
  Avatar,
  Checkbox,
  Dropdown
} from 'antd'
import {
  EllipsisOutlined
} from '@ant-design/icons'

import styles from './index.less'

const { Meta } = Card

const ContactCard = (props) => {
  const [
    active,
    setActive
  ] = useState(false)
  const {
    data,
    menu
  } = props
  const cls = [styles.contactCard]

  if (active) {
    cls.push(styles.active)
  }

  return (
    <Card bordered={false} className={cls.join(' ')}>
      <div className={styles.menu}>
        <Dropdown
          overlay={menu}
          trigger={['click']}
          onVisibleChange={visible => setActive(visible)}
        >
          <a onClick={e => e.preventDefault()}>
            <EllipsisOutlined style={{fontSize: '20px', color: '#8C8C8C'}} />
          </a>
        </Dropdown>
      </div>
      <Meta
        avatar={<Avatar src={data.image} />}
        title={data.name}
        description={data.email}
      />
      <div className={styles.tag}>
        <Row>
          <Col span={22}>
            {
              (data.tags || []).map((tag, index) => <Tag color="#E5EDFF" key={[tag, index].join('-')}>{tag}</Tag>)
            }
          </Col>
          <Col span={2} className={styles.checkBox}>
            <Checkbox/>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

export default ContactCard
