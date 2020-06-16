
import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  Form,
  Select,
  Button,
  DatePicker
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker;

const options = [{
  label: 'Rupert Edwards',
  value: '1'
}, {
  label: 'Sam Collins',
  value: '2'
}, {
  label: 'Rocky Rogers',
  value: '3'
}, {
  label: 'Natalie Summers',
  value: '4'
}, {
  label: 'Ricky Simms',
  value: '5'
}, {
  label: 'Rupert Edwards',
  value: '6'
}]

const formList = [{
  type: 'select',
  label: 'Assignees',
  placeholder: 'Search Assignees'
}, {
  type: 'select',
  label: 'Status',
  placeholder: 'Search Status'
}, {
  type: 'select',
  label: 'Type',
  placeholder: 'Search Type'
}, {
  type: 'multiSelect',
  label: 'Labels',
  placeholder: 'Search Labels'
}, {
  type: 'date',
  label: 'Date',
  placeholder: 'Created Date ～ Due Date'
}]

const Filter = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 5 : 2;
    const children = [];
    for (let i = 0; i < count; i++) {
      const formData = formList[i]
      let formItem

      if (formData.type === 'select') {
        formItem = (
          <Select options={options} placeholder={formData.placeholder} />
        )
      } else if (formData.type === 'multiSelect') {
        formItem = (
          <Select
            mode="multiple"
            options={options}
            placeholder={formData.placeholder}
          />
        )
      } else if (formData.type === 'date') {
        formItem = (
          <RangePicker />
        )
      }

      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={formData.label}
          >
            {formItem}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  };

  return (
    <Card>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Row gutter={24}>
          { getFields() }
          <Col span={8} style={{ textAlign: 'right' }}>
            <div style={{ marginTop: 8 }}>
              <Button
                style={{ margin: '0 8px' }}
                className="bordered"
                onClick={() => {
                  form.resetFields();
                }}
              >
                Reset
              </Button>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <a
                style={{ fontSize: 12, marginLeft: 12 }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                {expand ? <UpOutlined /> : <DownOutlined />} Collapse
              </a>
            </div>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

export default Filter
