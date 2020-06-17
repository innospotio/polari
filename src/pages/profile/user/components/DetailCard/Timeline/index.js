
import {
  Row,
  Col,
  Button,
  Timeline
} from 'antd'
import {
  SmileOutlined,
  HistoryOutlined,
  MessageOutlined,
} from '@ant-design/icons'

import styles from './index.less'

const statusText = {
  '1': 'TASK ADDED',
  '2': 'DEAL ADDED',
  '3': 'EVENT COMPLETED',
}
const icons = {
  '1': <HistoryOutlined style={{fontSize: 14}} />,
  '2': <MessageOutlined style={{fontSize: 14}} />,
  '3': <SmileOutlined style={{fontSize: 14}} />,
}
const colors = {
  '1': '#1245FA',
  '2': '#6C64FF',
  '3': '#31CB8A',
}
const TimelinePage = () => {

  const dataList = [{
    title: 'August,2016',
    items: [{
      date: '12 Aug',
      status: '1',
      time: '09:30 am',
      content: 'prepare for a bi-weekly meeting to discuss new features'
    }, {
      date: '10 Aug',
      status: '2',
      time: '09:30 am',
      content: 'Deal for the property in Malibu with Casey Brother Real Estate'
    }, {
      date: '18 Aug',
      status: '3',
      time: '09:30 am',
      content: 'Meet with Claudia in the <Caffee Caldo> for Brunch'
    }]
  }, {
    title: 'August,2016',
    items: [{
      date: '12 Aug',
      status: '1',
      time: '09:30 am',
      content: 'prepare for a bi-weekly meeting to discuss new features'
    }, {
      date: '10 Aug',
      status: '2',
      time: '09:30 am',
      content: 'Deal for the property in Malibu with Casey Brother Real Estate'
    }, {
      date: '18 Aug',
      status: '3',
      time: '09:30 am',
      content: 'Meet with Claudia in the <Caffee Caldo> for Brunch'
    }]
  }]

  return (
    <div>
      {
        dataList.map((blockData, index) => {
          return (
            <div className={styles.timelineBlock} key={['block', index].join('-')}>
              <p className={styles.title}>{blockData.title}</p>
              <Timeline>
                {
                  blockData.items.map((item, index) => {

                    return (
                      <Timeline.Item
                        key={['item', index].join('-')}
                        color={colors[item.status]}
                      >
                        <Row gutter={[34, 0]}>
                          <Col className={styles.date} flex="84px">
                            {item.date}
                          </Col>
                          <Col flex="auto">
                            <Row>
                              <Col flex="24px">
                                <div className={styles.icon}>
                                  {icons[item.status]}
                                </div>
                              </Col>
                              <Col flex="auto">
                                <p className={styles.status}>{statusText[item.status]}</p>
                                <p className={styles.content}>{item.content}</p>
                                <p className={styles.time}>{item.time}</p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Timeline.Item>
                    )
                  })
                }
              </Timeline>
            </div>
          )
        })
      }
    </div>
  )
}

export default TimelinePage
