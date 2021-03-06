import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Col, Row, Table, Tooltip } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import numeral from 'numeral';
import { MiniArea } from './Charts/index';
import NumberInfo from './NumberInfo/index';
import Trend from './Trend/index';
import styles from '../style.less';

const columns = [
  {
    title: <FormattedMessage id="dashboardanalysis.table.rank" defaultMessage="Rank" />,
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: (
      <FormattedMessage
        id="dashboardanalysis.table.search-keyword"
        defaultMessage="Search keyword"
      />
    ),
    dataIndex: 'keyword',
    key: 'keyword',
    render: text => <a href="/">{text}</a>,
  },
  {
    title: <FormattedMessage id="dashboardanalysis.table.users" defaultMessage="Users" />,
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
    className: styles.alignRight,
  },
  {
    title: (
      <FormattedMessage id="dashboardanalysis.table.weekly-range" defaultMessage="Weekly Range" />
    ),
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => (
      <Trend flag={record.status === 1 ? 'down' : 'up'}>
        <span
          style={{
            marginRight: 4,
          }}
        >
          {text}%
        </span>
      </Trend>
    ),
  },
];

const TopSearch = ({ loading, visitData2, searchData, dropdownGroup }) => (
  <Card
    loading={loading}
    bordered={false}
    title={
      <FormattedMessage
        id="dashboardanalysis.analysis.online-top-search"
        defaultMessage="Online Top Search"
      />
    }
    extra={dropdownGroup}
    style={{
      height: '100%',
    }}
  >
    <Row gutter={68} type="flex">
      <Col
        sm={12}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <NumberInfo
          subTitle={
            <span>
              <FormattedMessage
                id="dashboardanalysis.analysis.search-users"
                defaultMessage="search users"
              />
              <Tooltip
                title={
                  <FormattedMessage
                    id="dashboardanalysis.analysis.introduce"
                    defaultMessage="introduce"
                  />
                }
              >
                <InfoCircleOutlined
                  style={{
                    marginLeft: 8,
                  }}
                />
              </Tooltip>
            </span>
          }
          gap={8}
          total={<span style={{fontWeight: 'bold'}}>{numeral(12321).format('0,0')}</span>}
          status="up"
          subTotal={17.1}
        />
        <MiniArea
          line
          height={45}
          data={visitData2}
          color="l(270) 0:rgba(18,69,250,0) 1:rgba(18,69,250,.5)"
        />
      </Col>
      <Col
        sm={12}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <NumberInfo
          subTitle={
            <span>
              <FormattedMessage
                id="dashboardanalysis.analysis.per-capita-search"
                defaultMessage="Per Capita Search"
              />
              <Tooltip
                title={
                  <FormattedMessage
                    id="dashboardanalysis.analysis.introduce"
                    defaultMessage="introduce"
                  />
                }
              >
                <InfoCircleOutlined
                  style={{
                    marginLeft: 8,
                  }}
                />
              </Tooltip>
            </span>
          }
          total={<span style={{fontWeight: 'bold'}}>2.7</span>}
          status="down"
          subTotal={26.2}
          gap={8}
        />
        <MiniArea
          line
          height={45}
          data={visitData2}
          color="l(270) 0:rgba(18,69,250,0) 1:rgba(18,69,250,.5)"
        />
      </Col>
    </Row>
    <Table
      rowKey={record => record.index}
      size="small"
      columns={columns}
      dataSource={searchData}
      pagination={{
        style: {
          marginBottom: 0,
        },
        pageSize: 5,
      }}
    />
  </Card>
);

export default TopSearch;
