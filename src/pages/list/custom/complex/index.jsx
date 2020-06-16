
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Menu,
  Card,
  Table,
  Button,
  Avatar,
  Dropdown
} from 'antd';
import {
  DownOutlined,
  EditOutlined,
  PlusOutlined,
  HeartOutlined,
  DeleteOutlined,
  ReloadOutlined,
  SettingOutlined,
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
import Filter from '../components/Filter'

import styles from '../style.less';
const { Meta } = Card

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
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT
    ],
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
      <Row className={styles.filter}>
        <Col span={24}>
          <p className={styles.title}>All Tickets</p>
        </Col>
        <Col span={24} className={styles.filterWrap}>
          <Filter/>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <p className={styles.title}>查询表格</p>
        </Col>
        <Col span={18} className={styles.buttonWrap}>
          <Dropdown overlay={menu}>
            <Button>
              Bulk Edit <DownOutlined />
            </Button>
          </Dropdown>
          {
            pageType === 'list' ? (
              <Button onClick={() => setPageType('card')}>
                <ContactsOutlined /> Card View
              </Button>
            ) : (
              <Button onClick={() => setPageType('list')}>
                <UnorderedListOutlined /> List View
              </Button>
            )
          }
          <Button>
            <ReloadOutlined /> Refresh
          </Button>
          <Button>
            <SettingOutlined /> Setting
          </Button>
          <Button icon={<PlusOutlined />} type="primary">
            Add Item
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
