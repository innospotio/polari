
import {
  Table
} from 'antd'
import {
  EllipsisOutlined
} from '@ant-design/icons'

import styles from './style.less'

const ps = {
  'Low': 'gray',
  'Medium': 'yellow',
  'High': 'red',
  'Open': 'green',
  'Closed': 'gray',
}

const NiceList = (props) => {

  const columns = [
    {
      title: 'REQUESTED BY',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => {
        return (
          <>
          <img src={record.image} alt=""/>
          <span>{name}</span>
          </>
        )
      },
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      width: 220,
      title: 'SUBJECT',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'ASSIGNEE',
      dataIndex: 'assignee',
      key: 'assignee',
      render: (value, record) => {
        return (
          <>
          <img className="ss" src={record.image} />
          <span>{value}</span>
          </>
        )
      },
    },
    {
      title: 'PRIORITY',
      dataIndex: 'priority',
      key: 'priority',
      render: value => {
        return <span className={[styles.tag, styles[ps[value]]].join(' ')}>{value}</span>
      }
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      render: value => {
        return <span className={[styles.tag, styles[ps[value]]].join(' ')}>{value}</span>
      }
    },
    {
      title: 'DATE',
      key: 'date',
      dataIndex: 'date'
    },
    {
      title: 'EDIT',
      key: 'edit',
      align: 'center',
      render: (text, record) => (
        <EllipsisOutlined style={{fontSize: '20px', color: '#959EAD'}} />
      ),
    },
  ];

  const data = [
    {
      id: '#7',
      key: '1',
      name: 'John Brown',
      image: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290',
      subject: 'Mobile Campaign',
      assignee: 'Claire',
      priority: 'Low',
      status: 'Open',
      date: '22 Oct 2016',
    },
    {
      id: '#5',
      key: '2',
      name: 'Jim Green',
      image: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853',
      subject: 'I need help with adding a new contact data to be...',
      assignee: 'Irma',
      priority: 'Medium',
      status: 'Closed',
      date: '22 Oct 2016',
    },
    {
      id: '#71',
      key: '3',
      name: 'Joe Black',
      image: 'http://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&f=JPEG?w=4610&h=2968',
      subject: 'Mobile Campaign',
      assignee: 'Judith',
      priority: 'High',
      status: 'Closed',
      date: '22 Oct 2016',
    },
    {
      id: '#7',
      key: '1',
      name: 'John Brown',
      image: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290',
      subject: 'Mobile Campaign',
      assignee: 'Claire',
      priority: 'Low',
      status: 'Open',
      date: '22 Oct 2016',
    },
    {
      id: '#5',
      key: '2',
      name: 'Jim Green',
      image: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853',
      subject: 'I need help with adding a new contact data to be...',
      assignee: 'Irma',
      priority: 'Medium',
      status: 'Closed',
      date: '22 Oct 2016',
    },
    {
      id: '#71',
      key: '3',
      name: 'Joe Black',
      image: 'http://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&f=JPEG?w=4610&h=2968',
      subject: 'Mobile Campaign',
      assignee: 'Judith',
      priority: 'High',
      status: 'Closed',
      date: '22 Oct 2016',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  }

  return (
    <div className={styles.niceList}>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  )
}

export default NiceList
