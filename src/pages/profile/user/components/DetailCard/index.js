
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Card
} from 'antd';
import Notes from './Notes'
import Deals from './Deals'
import Timeline from './Timeline'

import styles from './index.less'

const tabList = [
  {
    key: 'timeline',
    tab: 'Timeline',
  }, {
    key: 'notes',
    tab: 'Notes',
  }, {
    key: 'nvents',
    tab: 'Events',
  }, {
    key: 'tasks',
    tab: 'Tasks',
  }, {
    key: 'deals',
    tab: 'Deals',
  }
]

const DetailCard = () => {
  const [tabKey, setTabKey] = useState('deals')

  const contentList = {
    timeline: <Timeline/>,
    notes: <Notes/>,
    deals: <Deals/>,
  }

  return (
    <Card
      bordered={false}
      tabList={tabList}
      style={{height: 984}}
      className={styles.detailCard}
      activeTabKey={tabKey}
      onTabChange={key => {
        setTabKey(key)
      }}
    >
      <div className={styles.cardInner}>
        { contentList[tabKey] }
      </div>
    </Card>
  )
}

export default DetailCard
