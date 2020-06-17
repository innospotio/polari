
import {
  Row,
  Col,
  Button,
  Avatar
} from 'antd'
import {
  PlusOutlined
} from '@ant-design/icons'

import styles from './index.less'

const colors = {
  '1': '#1245FA',
  '2': '#6C64FF',
  '3': '#31CB8A',
}

const Notes = () => {

  const dataList = [{
    status: '1',
    date: '32 days ago',
    content: 'This is a new note that will tell you when to start the call log.Do you understand that? '
  }, {
    status: '2',
    date: '31 days ago',
    content: 'Lorem ipsum sit amet dolor finium est valentius dolorem qualentus dolorem valerius dolorfinist est <a href="#">#url #campaigns #events</a> dolor finius dolorem.'
  }, {
    status: '3',
    date: '30 days ago',
    content: 'This is a new note that will tell you when to start the call log.Do you understand that? <a href="#">@Chris</a>'
  }, {
    status: '1',
    date: '32 days ago',
    pic: 'http://n.sinaimg.cn/default/1_img/upload/3933d981/691/w899h592/20200616/22aa-iuzasxs9311116.jpg',
    content: 'This is a new note that will tell you when to start the call log.Do you understand that? '
  }, {
    status: '2',
    date: '31 days ago',
    pic: 'http://n.sinaimg.cn/default/1_img/upload/3933d981/697/w899h598/20200616/64f1-iuzasxs9311234.jpg',
    content: 'Lorem ipsum sit amet dolor finium est valentius dolorem qualentus dolorem valerius dolorfinist est <a href="#">#url #campaigns #events</a> dolor finius dolorem.'
  }, {
    status: '3',
    date: '30 days ago',
    pic: 'http://n.sinaimg.cn/default/1_img/upload/3933d981/697/w899h598/20200616/331b-iuzasxs9311343.jpg',
    content: 'This is a new note that will tell you when to start the call log.Do you understand that? <a href="#">@Chris</a>'
  }]

  return (
    <>
      <Row className="detail-card-top" justify="space-between">
        <Col>Notes (5)</Col>
        <Col>
          <Button className="info" icon={<PlusOutlined/>}>Add</Button>
        </Col>
      </Row>
      {
        dataList.map((data, index) => {
          return (
            <div className={styles.block} key={['note', index].join('-')}>
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
                <p className={styles.desc} dangerouslySetInnerHTML={{__html: data.content}} />
                <p className={styles.time}>{data.date}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Notes
