import { SearchOutlined, LogoutOutlined, DownloadOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Input, Space, Avatar, Button, Select } from 'antd';
import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import Viewclient from './Viewclient';

import './antfile.css'
import AddClient from './AddClient';

const { Content, Sider } = Layout;
const { Option } = Select;


const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const menuStyle={
  display: 'flex',
  background: '#153AC7',
  boxShadow: '0px 4px 16px rgb(3 0 55 / 8%)',
  borderRadius: '8px',
  margin: '8px',
  fontWeight: '700',
  fontSize: '16px',
  color: '#FFFFFF',
}

const ClientMaster = ({setLogin}) => {

  const [client, setClient] = useState(['Client Master', 'View Clients']);
  const [viewClientStyle, setViewClientStyle] = useState(menuStyle)
  const [addClientStyle, setAddClientStyle] = useState({})

  const handleMenuViewClient = () => {
    setClient(['Client Master', 'View Clients'])
    setViewClientStyle(menuStyle)
    setAddClientStyle({})
  }
  
  const handleMenuAddClient = () => {
    
    setClient(['Client Master', 'Add Client', 'Create Profile'])
    setViewClientStyle({})
    setAddClientStyle(menuStyle)
  }

  const handleLogOut = () => {
    console.log('You have Log out successfully!');
    setLogin(false)
    localStorage.removeItem('token')
  }

  const breadCrumb = () => {
    return (<Breadcrumb>{client.map((breadName) => (
      <Breadcrumb.Item key={breadName}>{breadName}</Breadcrumb.Item>
    ))}
          
        </Breadcrumb>)
  }

return (
  <Layout>
    <Layout>
      <Sider width={300} className="site-layout-background">

      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <div style={{
        /* Punctualiti */
        
          marginLeft: '10px',
          marginTop: '20px',
          width: '144px',
          height: '24px',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '120%',

          display: 'flex',
          alignItems: 'center',

          color: '#233244',
          flex: 'none',
          order: 0,
          flexGrow: 0,
                }}>
      Company name
      </div>
      <div style={{margin: '5px'}}>
        <Input
        placeholder="Search modules"
        size="large"
        prefix={suffix}
        className="rounded-pill"
        style={{
        height: '40px',
        borderRadius: '24px',
        padding: '12px 16px 12px 16px',
         }}
        />
      </div>
      <Menu>
          <Menu.ItemGroup title="Client Master">
            <Menu.Item key="view_clients"
            style={viewClientStyle}
            onClick={handleMenuViewClient}
            >
            View Clients
            </Menu.Item>
            <Menu.Item key="add_client"
            style={addClientStyle}
            onClick={handleMenuAddClient}
            >
            Add Client
            </Menu.Item>
          </Menu.ItemGroup>
      </Menu>

      <div style={{ marginTop: '600px', borderTop: '1px solid #e1dbdb', display: 'flex',
    alignItems: 'flex-end'}}>
        <div style={{marginLeft: '10px', marginTop: '10px'}}>
        <Avatar size="large" src={faker.image.people()} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
          <span>James Burton</span>
          <span>'james@thevouch.digital</span>
        </div>
        <div style={{marginLeft: '55px', cursor: 'pointer' }}>
          <LogoutOutlined  style={{ fontSize: '25px'}} onClick={handleLogOut}/>
        </div>
        
        </div>
      </Space>
       
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
          minWidth: '1080px'
        }}
      >
        <div style={{
          fontWeight: '800',
          fontSize: '24px',
          color: '#030037',
          marginTop: '10px'
        }}>{client[1]}</div>
        {breadCrumb()}
        {client[1] === 'View Clients' ?
        <>
        <div style={{padding: '9px',
                  backgroundColor: '#fff',
                  borderBottom: '5px solid #f0f2f5',
                  display: 'flex',
                  justifyContent: 'space-between'}}>
        <div>
        <Input
        placeholder="Search"
        size="large"
        prefix={suffix}
        className="rounded-pill"
        style={{
        height: '40px',
        borderRadius: '24px',
        padding: '12px 16px 12px 16px',
        width: '350px',
         }}
        />
        </div>
        <Space size="middle" style={{ display: 'flex' }}>
          
        <Select
          showSearch
          placeholder="Columns"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
          style={{
            width: 120
          }}
        >
          <Option value="companyName">Company Name</Option>
          <Option value="email">Email Address</Option>
          <Option value="phoneNumber">Phone No</Option>
          <Option value="contactPerson">Contact Person</Option>
          <Option value="facilitator">Facilitator</Option>
          <Option value="sites">Sites</Option>
          <Option value="tenants">Tenants</Option>
          <Option value="tenantGroups">Tenant Groups</Option>
        </Select>

        <Button icon={<DownloadOutlined />} size="middle" style={{backgroundColor: '#E8EBF9', borderRadius: '7px'}}>
        Export
      </Button>
      </Space>
      </div>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: '50%',
          }}
        >
          <Viewclient />
        </Content>
        </>
        : <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: '50%',
        }}
      >
          <AddClient setClient={setClient}/>
          </Content>}
      </Layout>
    </Layout>
  </Layout>
)};

export default ClientMaster;