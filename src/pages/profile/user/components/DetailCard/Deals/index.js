
import {
  Row,
  Col,
  Tag,
  Button,
  Avatar,
  Statistic
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

const fs = [
  'blue', 'red', 'gray', 'green'
]

const Deals = () => {

  const dataList = [{
    feature: 'lose',
    title: 'Deal title would go here...',
    status: '1',
    sum: '212347.22',
    date: '32 days ago',
    comments: [{
      name: 'John',
      pic: 'https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007OBiawly8g3dyvoe6k0j30u00u0djc.jpg?KID=imgbed,tva&Expires=1592394631&ssig=itatelLv3g'
    }, {
      name: 'Cassandra'
    }],
    content: 'This is a new note that will tell you when to start the call log.Do you understand that? '
  }, {
    title: 'Deal for the property in Malibu with Casey Brother Real Estate',
    status: '2',
    date: '31 days ago',
    comments: [{
      name: 'John',
      pic: 'https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007OBiawly8g3dyvoe6k0j30u00u0djc.jpg?KID=imgbed,tva&Expires=1592394631&ssig=itatelLv3g'
    }],
    content: 'Lorem ipsum sit amet dolor finium est valentius dolorem qualentus dolorem valerius dolorfinist dolor finius dolorem.'
  }, {
    feature: 'win',
    title: 'Deal title would go here...',
    status: '3',
    date: '30 days ago',
    comments: [{
      name: 'John',
      pic: 'https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007OBiawly8g3dyvoe6k0j30u00u0djc.jpg?KID=imgbed,tva&Expires=1592394631&ssig=itatelLv3g'
    }, {
      name: 'Cassandra'
    }],
    content: 'This is a new note that will tell you when to start the call log.Do you understand that?'
  }, {
    title: 'Deal for the property in Malibu with Casey Brother Real Estate',
    status: '1',
    date: '32 days ago',
    comments: [{
      name: 'John',
      pic: 'https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007OBiawly8g3dyvoe6k0j30u00u0djc.jpg?KID=imgbed,tva&Expires=1592394631&ssig=itatelLv3g'
    }],
    pic: 'http://n.sinaimg.cn/default/1_img/upload/3933d981/691/w899h592/20200616/22aa-iuzasxs9311116.jpg',
    content: 'This is a new note that will tell you when to start the call log.Do you understand that? '
  }, {
    title: 'Deal for the property in Malibu with Casey Brother Real Estate',
    status: '2',
    date: '31 days ago',
    comments: [{
      name: 'John',
      pic: 'https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007OBiawly8g3dyvoe6k0j30u00u0djc.jpg?KID=imgbed,tva&Expires=1592394631&ssig=itatelLv3g'
    }, {
      name: 'Cassandra'
    }],
    pic: 'http://n.sinaimg.cn/default/1_img/upload/3933d981/697/w899h598/20200616/64f1-iuzasxs9311234.jpg',
    content: 'Lorem ipsum sit amet dolor finium est valentius dolorem qualentus dolorem valerius dolorfinist est dolor finius dolorem.'
  }, {
    title: 'Deal title would go here...',
    status: '3',
    date: '30 days ago',
    comments: [{
      name: 'John',
      pic: 'https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007OBiawly8g3dyvoe6k0j30u00u0djc.jpg?KID=imgbed,tva&Expires=1592394631&ssig=itatelLv3g'
    }],
    pic: 'http://n.sinaimg.cn/default/1_img/upload/3933d981/697/w899h598/20200616/331b-iuzasxs9311343.jpg',
    content: 'This is a new note that will tell you when to start the call log.Do you understand that?'
  }]

  return (
    <>
      <Row className="detail-card-top" justify="space-between">
        <Col>Deals (5)</Col>
        <Col>
          <Button className="info" icon={<PlusOutlined/>}>Add</Button>
        </Col>
      </Row>
      {
        dataList.map((data, index) => {
          return (
            <div className={[styles.block, styles[fs[index%4]]].join(' ')} key={['note', index].join('-')}>
              <div className={styles.pic}>
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
              </div>
              <div className={styles.content}>
                <p className={styles.title}>
                  {data.title}
                  <span style={{paddingLeft: 16}}>
                    {
                      data.feature === 'lose' ? (
                        <Tag color="#FF4445">Lost Deal</Tag>
                      ) : data.feature === 'win' ? (
                        <Tag color="#31CB8A">Won Deal</Tag>
                      ) : null
                    }
                  </span>
                </p>
                <p className={styles.desc}>{data.content}</p>
                <div className={styles.time}>
                  <Statistic value={data.sum} precision={2} prefix="$" />
                  <span style={{paddingRight: 16}}>
                    <CarryOutOutlined/> {data.date}
                  </span>
                  {
                    (data.comments || []).map((co, index) => {
                      const no = co.pic ? (
                        <Avatar
                          size={24}
                          src={co.pic}
                        />
                      ) : (
                        <Avatar
                          size={24}
                          style={{ backgroundColor: '#5278FF'}}
                        >{(co.name||'').slice(0,2)}</Avatar>
                      )
                      return (
                        <span key={['co', index].join('-')} className={styles.comments}>
                        {no}
                        </span>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Deals
