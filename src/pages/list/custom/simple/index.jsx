
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Menu,
  Avatar,
  Button,
  Dropdown
} from 'antd';
import {
  PlusOutlined,
  EllipsisOutlined,
  CaretDownOutlined,
  FunnelPlotOutlined,
  UnorderedListOutlined
} from '@ant-design/icons'

import {
  NiceList
} from '../../../../components/nice';

import styles from '../style.less';

const ps = {
  'Low': 'gray',
  'Medium': 'yellow',
  'High': 'red',
  'Open': 'green',
  'Closed': 'gray',
}

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

export default () => {
  const columns = [
    {
      width: 180,
      title: 'REQUESTED BY',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => {
        return (
          <>
          <Avatar size={24} src={record.image} />
          <span>{name}</span>
          </>
        )
      },
    },
    {
      width: 80,
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      width: 220,
      title: 'SUBJECT',
      dataIndex: 'subject',
      key: 'subject',
      ellipsis: true
    },
    {
      title: 'ASSIGNEE',
      dataIndex: 'assignee',
      key: 'assignee',
      render: (value, record) => {
        return (
          <>
          <Avatar size={24} src={record.image} />
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
        <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
            <EllipsisOutlined style={{fontSize: '20px', color: '#959EAD'}} />
          </a>
        </Dropdown>
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

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )

  return (
    <div>
      <Row>
        <Col span={12} className={styles.filterWrap}>
          <span className={styles.filter}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className={styles.filterButton} onClick={e => e.preventDefault()}>
                All Tickets <CaretDownOutlined style={{fontSize: 10, color: '#999'}} />
              </a>
            </Dropdown>
          </span>
          <span className={styles.page}>
            10 Total
          </span>
          <span className={styles.sort}>
            <span>Sort by: </span>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className={styles.sortButton} onClick={e => e.preventDefault()}>
                Date Created <CaretDownOutlined style={{fontSize: 8, color: '#999'}} />
              </a>
            </Dropdown>
          </span>
        </Col>
        <Col span={12} className={styles.buttonWrap}>
          <Button>
            List <UnorderedListOutlined />
          </Button>
          <Button>
            Filter <FunnelPlotOutlined />
          </Button>
          <Button icon={<PlusOutlined />} type="primary">
            Add Ticket
          </Button>
        </Col>
      </Row>

      <div className={styles.listWrap}>
        <NiceList
          size="small"
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};