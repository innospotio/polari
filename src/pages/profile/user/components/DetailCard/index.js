

import {
  Row,
  Col,
  Card
} from 'antd';

import styles from './index.less'

const tabList = [
  {
    key: 'Timeline',
    tab: 'Timeline',
  }, {
    key: 'Notes',
    tab: 'Notes',
  }, {
    key: 'Events',
    tab: 'Events',
  }, {
    key: 'Tasks',
    tab: 'Tasks',
  }, {
    key: 'Deals',
    tab: 'Deals',
  }
]

const DetailCard = () => {

  return (
    <Card
      bordered={false}
      tabList={tabList}
      style={{height: 984}}
      className={styles.detailCard}
    >
      <div className={styles.cardInner}>
        aaa
      </div>
    </Card>
  )
}

export default DetailCard
