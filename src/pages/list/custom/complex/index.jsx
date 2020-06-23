
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import {
  FormattedMessage,
  formatMessage,
  getLocale
} from 'umi-plugin-react/locale';
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

const ComplexList = ({ dispatch, customList }) => {
  const [
    pageType,
    setPageType
  ] = useState('list')
  const complexList = customList.complexList
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

  useEffect(() => {
    dispatch({
      type: 'customList/fetchComplexList',
      payload: {
        locale: getLocale()
      }
    })
  }, [])

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
          <EditOutlined/> { formatMessage({ id: 'list.custom.normal.menu.editTicket' }) }
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">
          <DeleteOutlined/> { formatMessage({ id: 'list.custom.normal.menu.remove' }) }
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <a href="#">
          <HeartOutlined /> { formatMessage({ id: 'list.custom.normal.menu.favorite' }) }
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div>
      <Row className={styles.filter}>
        <Col span={24}>
          <p className={styles.title}>
            <FormattedMessage
              id="list.custom.normal.allTickets"
            />
          </p>
        </Col>
        <Col span={24} className={styles.filterWrap}>
          <Filter/>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <p className={styles.title}>
            <FormattedMessage
              id="list.custom.normal.queryTable"
            />
          </p>
        </Col>
        <Col span={18} className={styles.buttonWrap}>
          <Dropdown overlay={menu}>
            <Button>
              { formatMessage({ id: 'list.custom.normal.bulkEdit' }) } <DownOutlined />
            </Button>
          </Dropdown>
          {
            pageType === 'list' ? (
              <Button onClick={() => setPageType('card')}>
                <ContactsOutlined /> { formatMessage({ id: 'list.custom.normal.cardView' }) }
              </Button>
            ) : (
              <Button onClick={() => setPageType('list')}>
                <UnorderedListOutlined /> { formatMessage({ id: 'list.custom.normal.listView' }) }
              </Button>
            )
          }
          <Button>
            <ReloadOutlined /> { formatMessage({ id: 'list.custom.normal.refresh' }) }
          </Button>
          <Button>
            <SettingOutlined /> { formatMessage({ id: 'list.custom.normal.setting' }) }
          </Button>
          <Button icon={<PlusOutlined />} type="primary">
            { formatMessage({ id: 'list.custom.normal.addItem' }) }
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
              dataSource={complexList}
            />
          ) : (
            <Row gutter={[24, 24]}>
              {
                complexList.map((item, index) => {
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

export default connect(({ customList, loading }) => ({
  customList,
  loading: loading.models.customList,
}))(ComplexList);
