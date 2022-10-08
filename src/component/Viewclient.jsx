import { Space, Table, Avatar, Popover } from 'antd';
import { MoreOutlined, EyeOutlined, EditOutlined,
StopOutlined, DeleteOutlined } from '@ant-design/icons';
import { faker } from '@faker-js/faker';

import React from 'react';

const content = (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100px',
        }}>
            <p><EyeOutlined /><span style={{ marginLeft: '10px'}}>View Details</span></p>
            <p><EditOutlined /><span style={{ marginLeft: '10px'}}>Edit</span></p>
            <p><StopOutlined /><span style={{ marginLeft: '10px'}}>Block Access</span></p>
            <p><DeleteOutlined /><span style={{ marginLeft: '10px'}}> Delete</span></p>
    </div>
  );

const columns = [
  {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyName',
    render: (_, record) => {
    return (
        <Space >
        <Avatar size="large" src={record.companyImage} />
        <span>{record.companyName}</span>
        </Space>
    )}
  },
  {
    title: 'Email Address',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone No',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Contact Person',
    key: 'contactPerson',
    dataIndex: 'contactPerson',
  },
  
  {
    title: 'Facilitator',
    key: 'facilitator',
    dataIndex: 'facilitator'
  },
  
  {
    title: 'Sites',
    key: 'sites',
    dataIndex: 'sites'
  },
  {
    title: 'Tenants',
    key: 'tenants',
    dataIndex: 'tenants',
  },
  {
    title: 'Tenant Groups',
    key: 'tenantGroups',
    dataIndex: 'tenantGroups'
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Popover placement="leftTop" content={content} trigger="click">
        <MoreOutlined style={{
            fontSize: 25
        }}/>
      </Popover>
        
      </Space>
    ),
  },
];
const data = [];
for (let i=0; i<500; i++){
    data.push({
            key: `${i+1}`,
            companyImage: faker.image.business(),
            companyName: faker.company.name(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number('+91 ###########'),
            contactPerson: faker.name.fullName(),
            facilitator: '--',
            sites: faker.random.numeric(2),
            tenants: '--',
            tenantGroups: faker.random.numeric()
    })
}

const Viewclient = () => <Table columns={columns} dataSource={data} pagination={{
    position: ['bottomLeft'],
  }} size="middle" />;

export default Viewclient;