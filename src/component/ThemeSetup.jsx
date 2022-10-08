import { RightOutlined, ReloadOutlined, BorderOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography, Checkbox, Radio, Space } from 'antd';
import React, { useState } from 'react';

import './antfile.css'

const { Option } = Select;
const { Title } = Typography;

const ThemeSetup = ({setCurrent, setStepStyle3, setClient}) => {
  const [form] = Form.useForm();
  const [themeInputIconColor, setThemeInputIconColor] = useState('#153AC7')
  const [useColor, setUseColor] = useState('#F8F9FD')
  const [loginModel, setLoginModel] = useState('center')


  const onFinish = (values) => {
    console.log(values);
    setCurrent(3)
    setStepStyle3({fontSize: 35, color: '#51bb0e'})
    setClient(['Client Master', 'Add Client', 'Create Profile', 'Payment Setup', 'Theme Setup', 'Modules Setup'])
  };

  const onReset = () => {
    form.resetFields();
  };



  return (
    <>
        <div>
            <Title level={3}>Theme Setup</Title>
            <p>Add information about the client to give them a personalized experience.</p>
        </div>
    <Form form={form} name="control-hooks" onFinish={onFinish}
        style={{
            marginTop: '29px',
            display: 'flex',
            flexDirection: 'column'
        }}
    >
                <Form.Item
                    name="ThemeInputIcon"
                >
                    <Space direction='vertical'>
                    <Input
                        prefix={<BorderOutlined
                          className='ThemeInputIcon'
                          style={{
                          background: themeInputIconColor,
                          borderRadius: '9px'
                        }}/>}
                        className='create-profile-form'
                        placeholder='#153AC7'
                        value={themeInputIconColor}
                        onChange={e => setThemeInputIconColor(e.target.value)}
                    />
                    <span>Add Hex Value.</span>
                    </Space>
                </Form.Item>
                <Title level={5}>Login Theme</Title>
                <p>Select the look and feel of the login page.</p>
                <Form.Item name='useColor'>
                    <Radio value="useColor"
                    checked={true}
                    > Use Color </Radio>
                </Form.Item>
                <Form.Item
                    name="setUseColorf"
                    style={{
                      display: 'flex'
                    }}
                >
                    <Input
                        prefix={<BorderOutlined
                          className='ThemeInputIcon'
                          style={{
                          background: useColor,
                          borderRadius: '9px'
                        }}/>}
                        className='create-profile-form'
                        placeholder='#F8F9FD'
                        value={useColor}
                        onChange={e => setUseColor(e.target.value)}
                    />
                </Form.Item>
                <Title level={5}>Where Should be the login modal?</Title>
                
                  <Form.Item>
                    <Radio.Group value={loginModel} onChange={(e) => {setLoginModel(e.target.value)}}
                    style={{
                      display: 'flex'
                    }}>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}>
                        <div style={{
                          width: '120px',
                          height: '84px',
                          background: '#F5F5F5',
                          borderRadius: '8px'
                        }}>
                          <div style={{
                            position: 'absolute',
                            width: '32px',
                            height: '40px',
                            left: '10px',
                            top: '22px',
                            background: '#153AC7',
                            borderRadius: '4px',
                          }}></div>
                        </div>
                        <Radio value="left">Left</Radio>
                      </div>
                      <div style={{
                        marginLeft: '19px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}>
                        <div style={{
                            width: '120px',
                            height: '84px',
                            background: '#F5F5F5',
                            borderRadius: '8px',
                          }}>
                            <div style={{
                              position: 'relative',
                              width: '32px',
                              height: '40px',
                              left: '78px',
                              top: '22px',
                              background: '#153AC7',
                              borderRadius: '4px',
                            }}></div>
                          </div>
                        <Radio value="right">Right</Radio>
                      </div>
                      <div style={{
                        marginLeft: '19px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}>
                        <div style={{
                            width: '120px',
                            height: '84px',
                            background: '#F5F5F5',
                            borderRadius: '8px'
                          }}>
                            <div style={{
                              position: 'relative',
                              width: '32px',
                              height: '40px',
                              left: '44px',
                              top: '22px',
                              background: '#153AC7',
                              borderRadius: '4px',
                            }}></div>
                          </div>
                        <Radio value="center">Center</Radio>
                      </div>
                      </Radio.Group>
                  </Form.Item>
        
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

export default ThemeSetup;