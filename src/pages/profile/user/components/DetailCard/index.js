
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Card
} from 'antd';
import Tasks from './Tasks'
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
    key: 'tasks',
    tab: 'Tasks',
  }, {
    key: 'deals',
    tab: 'Deals',
  }
]

const DetailCard = () => {
  const [tabKey, setTabKey] = useState('timeline')

  const contentList = {
    timeline: <Timeline/>,
    notes: <Notes/>,
    deals: <Deals/>,
    tasks: <Tasks/>,
  }

  return (
    <Card
      bordered={false}
      tabList={tabList}
      style={{height: 948}}
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
