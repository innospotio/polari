
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Menu,
  Card,
  Button,
  Avatar,
  Dropdown
} from 'antd';
import {
  EditOutlined,
  PlusOutlined,
  HeartOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  ContactsOutlined,
  CaretDownOutlined,
  FunnelPlotOutlined,
  UnorderedListOutlined
} from '@ant-design/icons'

import {
  NiceList
} from '../../../../components/nice';
import ContactCard from './components/ContactCard'

import styles from '../style.less';

const { Meta } = Card

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
  const [
    pageType,
    setPageType
  ] = useState('list')
  const columns = [
    {
      title: 'REQUESTED BY',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => {
        return (
          <div>
            <Meta
              avatar={<Avatar size={40} src={record.image} />}
              title={record.name}
              description={record.email}
            />
          </div>
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
          <Avatar size={28} src={record.image} />
          <span>{value}</span>
          </>
        )
      },
    },
    {
      title: 'TAGS',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => {
        let tagMenu
        const nts = (tags || []).slice(0, 2)

        if (nts.length < tags.length) {
          nts.push('...')

          const sts = tags.slice(2)

          tagMenu = (
            <div
              style={{padding: '24px 24px 12px', maxWidth: 240}}
              className="ant-dropdown-menu ant-dropdown-menu-light ant-dropdown-menu-root ant-dropdown-menu-vertical">
              {
                sts.map((tag, index) => (
                  <span
                    style={{minWidth: 'auto', marginBottom: 12}}
                    key={[tag, index].join('-')}
                    className={[styles.tag, styles.gray].join(' ')}
                  >{tag}</span>
                ))
              }
            </div>
          )
        }

        return nts.map((tag, index) => {
          return (
            <span
              style={{minWidth: 'auto'}}
              key={[tag, index].join('-')}
              className={[styles.tag, styles.gray].join(' ')}
            >
              {
                tag === '...' ? (
                <Dropdown
                  overlay={tagMenu}
                  trigger={['click']}
                  placement="bottomRight"
                >
                  <a onClick={e => e.preventDefault()}>
                    <EllipsisOutlined style={{fontSize: '12px', color: '#959EAD'}} />
                  </a>
                </Dropdown>
                ) : tag
              }
            </span>
          )
        })
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
      email: 'ckctm12@gmail.com',
      image: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290',
      subject: 'Mobile Campaign',
      assignee: 'Claire',
      priority: 'Low',
      status: 'Open',
      date: '22 Oct 2016',
      tags: ['test tag', 'another tag', 'something tag', 'test tag', 'another tag', 'something tag']
    },
    {
      id: '#5',
      key: '2',
      name: 'Jim Green',
      email: 'nvt.isst.nute@gmail.com',
      image: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853',
      subject: 'I need help with adding a new contact data to be...',
      assignee: 'Irma',
      priority: 'Medium',
      status: 'Closed',
      date: '22 Oct 2016',
      tags: ['another tag', 'something tag']
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
      tags: ['test tag', 'another tag', 'something tag']
    },
    {
      id: '#7',
      key: '1',
      name: 'John Brown',
      email: 'thuhang.nute@gmail.com',
      image: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290',
      subject: 'Mobile Campaign',
      assignee: 'Claire',
      priority: 'Low',
      status: 'Open',
      date: '22 Oct 2016',
      tags: ['test tag', 'another tag']
    },
    {
      id: '#5',
      key: '2',
      name: 'Jim Green',
      email: 'tranthuy.nute@gmail.com',
      image: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853',
      subject: 'I need help with adding a new contact data to be...',
      assignee: 'Irma',
      priority: 'Medium',
      status: 'Closed',
      date: '22 Oct 2016',
      tags: ['test tag', 'another tag', 'something tag']
    },
    {
      id: '#71',
      key: '3',
      name: 'Joe Black',
      email: 'binhan628@gmail.com',
      image: 'http://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&f=JPEG?w=4610&h=2968',
      subject: 'Mobile Campaign',
      assignee: 'Judith',
      priority: 'High',
      status: 'Closed',
      date: '22 Oct 2016',
      tags: ['test tag', 'another tag', 'something tag']
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
        <a href="#">
          <EditOutlined/> Edit Ticket
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">
          <DeleteOutlined/> Remove
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <a href="#">
          <HeartOutlined /> Mark as Favorite
        </a>
      </Menu.Item>
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
          {
            pageType === 'list' ? (
              <Button onClick={() => setPageType('card')}>
                Card <ContactsOutlined />
              </Button>
            ) : (
              <Button onClick={() => setPageType('list')}>
                List <UnorderedListOutlined />
              </Button>
            )
          }
          <Button>
            Filter <FunnelPlotOutlined />
          </Button>
          <Button icon={<PlusOutlined />} type="primary">
            Add Ticket
          </Button>
        </Col>
      </Row>

      <div className={styles.listWrap}>
        {
          pageType === 'list' ? (
            <NiceList
              rowSelection={{
                type: 'checkbox',
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
            />
          ) : (
            <Row gutter={[24, 24]}>
              {
                data.map((item, index) => {
                  return (
                    <Col key={['d', 'ContactCard', index].join('-')} span={8}>
                      <ContactCard
                        data={item}
                        menu={menu}
                      />
                    </Col>
                  )
                })
              }
            </Row>
          )
        }
      </div>
    </div>
  );
};
