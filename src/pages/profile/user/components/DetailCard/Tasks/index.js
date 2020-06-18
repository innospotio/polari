
import {
  Row,
  Col,
  Button,
  Avatar,
  Checkbox,
  Typography
} from 'antd'
import {
  PlusOutlined,
  CarryOutOutlined
} from '@ant-design/icons'

import styles from './index.less'

const colors = {
  '1': '#31CB8A',
  '2': '#FCC465',
  '3': '#6C64FF',
}

const { Text } = Typography

const Deals = () => {

  const dataList = [{
    title: 'EMAIL',
    status: '1',
    sum: '212347.22',
    date: '32 days ago',
    message: 'Assigned to Mark R.',
    content: 'Send over investment documents',
    pic: 'https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007OBiawly8g3dyvoe6k0j30u00u0djc.jpg?KID=imgbed,tva&Expires=1592394631&ssig=itatelLv3g'
  }, {
    title: 'DOCUMENT - OVERDUE 14 DAYS',
    status: '2',
    date: '31 days ago',
    message: 'Assigned to Amy Q.',
    content: 'Write down the meating digesto so we could prepare for the bi-weekly standup'
  }, {
    title: 'DOCUMENT',
    status: '3',
    date: '30 days ago',
    message: 'Assigned to Mark R.',
    content: 'Prepare for a bi- weekly meeting to discuss new featurer'
  }]

  return (
    <>
      <Row className="detail-card-top" justify="space-between">
        <Col>Open Tasks (3 Left)</Col>
        <Col>
          <Button className="info" icon={<PlusOutlined/>}>Add</Button>
        </Col>
      </Row>
      {
        dataList.map((data, index) => {
          return (
            <Row className={styles.block} key={['task', index].join('-')}>
              <Col flex="40px" style={{paddingTop: 24}}>
                <Checkbox className="large" />
              </Col>
              <Col flex="58px" style={{paddingTop: 12}}>
                {
                  data.pic ? (
                    <Avatar
                      size={42}
                      src={data.pic}
                    />
                  ) : (
                    <Avatar
                      size={42}
                      style={{ backgroundColor: colors[data.status] }}
                    >AQ</Avatar>
                  )
                }
              </Col>
              <Col flex="auto" className={styles.content}>
                <p className={styles.title}>
                  {
                    data.status === '2' ? (
                      <Text type="danger">{data.title}</Text>
                    ) : (
                      <span>{data.title}</span>
                    )
                  }
                </p>
                <p className={styles.desc}>{data.content}</p>
                <Row className={styles.time}>
                  <Col>{data.message}</Col>
                  <Col style={{lineHeight: '14px'}}><span className={styles.circle} /></Col>
                  <Col>{data.date}</Col>
                </Row>
              </Col>
            </Row>
          )
        })
      }

      <Row className="detail-card-top" style={{marginTop: 32}} justify="space-between">
        <Col>Closed Tasks</Col>
      </Row>
      {
        dataList.map((data, index) => {
          return (
            <Row className={styles.block} key={['task', index].join('-')}>
              <Col flex="40px" style={{paddingTop: 24}}>
                <Checkbox className="large" />
              </Col>
              <Col flex="58px" style={{paddingTop: 12}}>
                {
                  data.pic ? (
                    <Avatar
                      size={42}
                      src={data.pic}
                    />
                  ) : (
                    <Avatar
                      size={42}
                      style={{ backgroundColor: colors[data.status] }}
                    >AQ</Avatar>
                  )
                }
              </Col>
              <Col flex="auto" className={styles.content}>
                <p className={styles.title}>
                  {data.title}
                </p>
                <p className={styles.desc}>
                  <Text delete>{data.content}</Text>
                </p>
                <Row className={styles.time}>
                  <Col>{data.message}</Col>
                  <Col style={{lineHeight: '14px'}}><span className={styles.circle} /></Col>
                  <Col>{data.date}</Col>
                </Row>
              </Col>
            </Row>
          )
        })
      }
    </>
  )
}

export default Deals
