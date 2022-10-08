import { RightOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography, Checkbox, Radio } from 'antd';
import React from 'react';

import './antfile.css'

const { Option } = Select;
const { Title } = Typography;

const PaymentSetup = ({setCurrent, setStepStyle2, setClient}) => {
  const [form] = Form.useForm();


  const onFinish = (values) => {
    console.log(values);
    setCurrent(2)
    setStepStyle2({fontSize: 35, color: '#51bb0e'})
    setClient(['Client Master', 'Add Client', 'Create Profile', 'Payment Setup', 'Theme Setup'])
  };

  const onReset = () => {
    form.resetFields();
  };



  return (
    <>
        <div>
            <Title level={3}>Payment Setup</Title>
            <p>Set up payments for the client.</p>
        </div>
    <Form form={form} name="control-hooks" onFinish={onFinish}
        style={{
            marginTop: '29px',
            display: 'flex',
            flexDirection: 'column'
        }}
    >
      <Form.Item
                    name="BillingAddress"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input 
                        className='create-profile-form'
                        placeholder='Billing Address *'
                    />
                </Form.Item>
        <div style={{
            flex: '1',
            display: 'flex'
        }}>
            <div style={{
                flex: '1',
                paddingRight: '19px',
            }}>
                
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
                    <Option value="State1">State 1</Option>
                    <Option value="State2">State 2</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="NumberofSiteAccess"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select
                    className='create-profile-form'
                    allowClear
                    placeholder='Select Number of Site Access *'
                    >
                    <Option value="NumberofSiteAccess1">Number of Site Access 1</Option>
                    <Option value="NumberofSiteAccess2">Number of Site Access 2</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="Discount"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input
                        className='create-profile-form'
                        placeholder='Discount (%) *'
                    />
                </Form.Item>
                <div>
                <Title level={5}>Payment Mode</Title>
                <Form.Item name="PaymentMode" valuePropName="checked">
                  <Checkbox.Group>
                    <Checkbox>UPI</Checkbox>
                    <Checkbox>Net Banking</Checkbox>
                    <Checkbox>Cash</Checkbox>
                    <Checkbox>Cheque</Checkbox>
                    <Checkbox>Other</Checkbox>
                  </Checkbox.Group>
                </Form.Item>
                </div>
            </div>
            <div style={{
                flex: '1'
            }}>
                
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
                    name="RSPayableAmountperSite"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input type='number'
                        className='create-profile-form'
                        placeholder='Rs. Payable Amount per Site *'
                    />
                </Form.Item>
                <Form.Item
                    name="Reason"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input
                        className='create-profile-form'
                        placeholder='Reason *'
                    />
                </Form.Item>
                <div>
                <Title level={5}>Payment Status</Title>
                <Form.Item name='PaymentStatus'>
                  <Radio.Group>
                    <Radio value="Paid"> Paid </Radio>
                    <Radio value="Pending"> Pending </Radio>
                  </Radio.Group>
                </Form.Item>
                </div>
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

export default PaymentSetup;