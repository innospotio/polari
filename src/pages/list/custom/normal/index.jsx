
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Menu,
  Button,
  Dropdown
} from 'antd';
import {
  CaretDownOutlined,
  FunnelPlotOutlined,
  UnorderedListOutlined
} from '@ant-design/icons'

import {
  NiceList
} from '../../../../components/nice';

import styles from './index.less';

export default () => {

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
          <Button icon={<UnorderedListOutlined />} />
          <Button>
            Filter <FunnelPlotOutlined />
          </Button>
        </Col>
      </Row>
      <NiceList/>
    </div>
  );
};
