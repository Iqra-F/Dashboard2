import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '25%',
  },
  {
    title: 'Monthly',
    dataIndex: 'monthly',
    key: 'monthly',
    width: '25%',
  },
  {
    title: 'Yearly',
    dataIndex: 'yearly',
    key: 'yearly',
    width: '25%',
  }
];

const data = [
  {
    key: '1',
    name: 'Trial',
    monthly: '$0.00',
    yearly: '$0.00',
  },
  {
    key: '2',
    name: 'Basic',
    monthly: '$9.00',
    yearly: '$99.00',
  },
  {
    key: '3',
    name: 'Standard',
    monthly: '$29.00',
    yearly: '$299.00',
  },
  {
    key: '4',
    name: 'Professional',
    monthly: '$59.00',
    yearly: '$599.00',
  }
];

const PackagesTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={false} // This line removes pagination
  />
);

export default PackagesTable;