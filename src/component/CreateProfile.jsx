import { PlusOutlined, RightOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography, Space } from 'antd';
import React from 'react';

import './antfile.css'

const { Option } = Select;
const { Title } = Typography;

const CreateProfile = ({setCurrent, setStepStyle1, setClient}) => {
  const [form] = Form.useForm();


  const onFinish = (values) => {
    console.log(values);
    setCurrent(1)
    setStepStyle1({fontSize: 35, color: '#51bb0e'})
    setClient(['Client Master', 'Add Client', 'Create Profile', 'Payment Setup'])
  };

  const onReset = () => {
    form.resetFields();
  };



  return (
    <>
        <div>
            <Title level={3}>Create Client Profile</Title>
            <p>Add some basic information related to the client.</p>
        </div>
        <div>
            <Space
                direction="horizontal"
                size="middle"
                style={{
                display: 'flex',
                }}
            >
                <div style={{
                    borderRadius: '100px',
                    border: '2px solid #f0f2f5',
                    width: '150px',
                    height: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
            <PlusOutlined  style={{
                fontSize: '20px',
                color: 'rgb(202 205 211)'
                
            }} />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Title level={5}>Company Logo</Title>
                <span>Logo ratio shoud be 1:1 and should be 120px X 120 px</span>
            </div>
            </Space>
        </div>
    <Form form={form} name="control-hooks" onFinish={onFinish}
        style={{
            marginTop: '29px',
            display: 'flex',
            flexDirection: 'column'
        }}
    >
        <div style={{
            flex: '1',
            display: 'flex'
        }}>
            <div style={{
                flex: '1',
                paddingRight: '19px',
            }}>
                <Form.Item
                    name="CompanyName"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input 
                        className='create-profile-form'
                        placeholder='Company Name *'
                    />
                </Form.Item>
                <Form.Item
                    name="BusinessCategory"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select
                    className='create-profile-form'
                    allowClear
                    placeholder='Select Business Category *'
                    >
                    <Option value="business1">Business 1</Option>
                    <Option value="business2">Business 2</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="CompanyEmail"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input type='email'
                        className='create-profile-form'
                        placeholder='Company Email Address *'
                    />
                </Form.Item>
                <Form.Item
                    name="State"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select
                    className='create-profile-form'
                    allowClear
                    placeholder='Select State *'
                    >
                    <Option value="state1">State 1</Option>
                    <Option value="state2">State 2</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="GSTNumber"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input
                        className='create-profile-form'
                        placeholder='GST Number *'
                    />
                </Form.Item>
            </div>
            <div style={{
                flex: '1'
            }}>
                <Form.Item
                    name="Website"
                >
                    <Input type="url"
                        className='create-profile-form'
                        placeholder='Website'
                    />
                </Form.Item>
                <Form.Item
                    name="FacilityManagementCompany"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select
                    className='create-profile-form'
                    allowClear
                    placeholder='Select Facility Management Company *'
                    >
                    <Option value="FacilityManagementCompany1">Facility Management Company 1</Option>
                    <Option value="busFacilityManagementCompany2iness2">Facility Management Company 2</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="MobileNumber"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input type='number'
                        className='create-profile-form'
                        placeholder='Mobile Number *'
                    />
                </Form.Item>
                <div style={{
                    display: 'flex'
                }}>
                    <Form.Item
                        name="City"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                        style={{
                            flex: '3',
                            paddingRight: '19px'
                        }}
                    >
                        <Select
                        className='create-profile-form'
                        allowClear
                        placeholder='Select City *'
                        >
                        <Option value="City1">City 1</Option>
                        <Option value="City2">City 2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                    name="Pincode"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                    style={{
                        flex: '1'
                    }}
                >
                    <Input type='number'
                        className='create-profile-form'
                        placeholder='Pincode *'
                    />
                </Form.Item>
                </div>
                <Form.Item
                    name="FaxNumber"
                >
                    <Input
                        className='create-profile-form'
                        placeholder='Fax Number'
                    />
                </Form.Item>
            </div>
        </div>
      <Form.Item>
        <Button htmlType="submit"
        icon={<RightOutlined />}
        style={{
          background: '#153AC7',
          borderRadius: '8px',
          color: ' #FFFFFF',
          width: '190px',
          height: '45px'
        }}>
          Save & Continue
        </Button>
        <Button htmlType="button" onClick={onReset}
        icon={<ReloadOutlined style={{
            transform: 'scaleX(-1)'
          }} />}
          style={{
            background: '#FFFFFF',
            borderStyle: 'none',
            marginLeft: '9px',
            width: '190px',
            height: '45px'
          }}>
          Reset
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default CreateProfile;