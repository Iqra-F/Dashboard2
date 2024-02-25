import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Package',
    dataIndex: 'name',
    key: 'name',
    render: () => <span>Basic</span>,
    width: '40%',
  },
  {
    title: 'Total',
    dataIndex: 'age',
    key: 'age',
    render: () => <span>$9.90</span>,
    width: '35%',
  },
  {
    title: 'Gateway',
    dataIndex: 'address',
    key: 'address',
    render: () => <span>Paypal</span>,
    width: '35%',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'Pending') {
            color = 'red';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toLowerCase()}
            </Tag>
          );
        })}
      </>
    ),
    width: '35%',
  }
];

const data = [
  {
    key: '1',
    age: 42,
    address: 'Paypal',
    tags: ['Pending'],
  },
];

const OrderTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={false} // This line removes pagination
  />
);

export default OrderTable;