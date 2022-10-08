import { RightOutlined, ReloadOutlined, RadarChartOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography, Checkbox, Radio } from 'antd';
import React from 'react';

import './antfile.css'
const { Title } = Typography;

const ModuleSetup = ({setCurrent, setStepStyle4, setClient}) => {
  const [form] = Form.useForm();


  const onFinish = (values) => {
    console.log(values);
    setCurrent(4)
    setStepStyle4({fontSize: 35, color: '#51bb0e'})
    setClient(['Client Master', 'Add Client', 'Success'])
  };

  const onReset = () => {
    form.resetFields();
  };



  return (
    <>
        <div>
            <Title level={3}>Modules Setup</Title>
            <p>Select the modules that the client can use..</p>
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
                flex: '1'
            }}>
                
                <Form.Item name="PaymentMode" valuePropName="checked">
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Checkbox  checked={true} style={{
                      marginLeft: '8px',
                      marginBottom: '10px'
                    }}>Home / Dashboard</Checkbox>
                    <Checkbox checked={true} style={{
                      marginBottom: '10px'
                    }}>Helpdesk</Checkbox>
                    <Checkbox checked={true} style={{
                      marginBottom: '10px'
                    }}>Assets</Checkbox>
                    <div style={{
                      display: 'flex',
                      marginBottom: '10px',
                      background: '#153AC7',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#FFFFFF',
                      gap: '4px',
                      width: '300px',
                      height: '46px',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                    <Checkbox checked={true}>Daily Tasks</Checkbox>
                    <RightOutlined/>
                    </div>
                    <Checkbox style={{
                      marginLeft: '8px',
                      marginBottom: '10px'
                    }}>PPM</Checkbox>
                    <Checkbox checked={true} style={{
                      marginBottom: '10px'
                    }}>Employees</Checkbox>
                    <Checkbox checked={true} style={{
                      marginBottom: '10px'
                    }}>Profile</Checkbox>
                    <Checkbox checked={true} style={{
                      marginBottom: '10px'
                    }}>Transactions</Checkbox>
                  </div>
                </Form.Item>
            </div>
            <div style={{
                flex: '3',
                boxShadow: '0px 1px 5px rgba(3, 0, 55, 0.08)',
                padding: '9px'
            }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                  <div style={{
                    display:'flex'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: '#E8EBF9',
                      borderRadius: '9px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <RadarChartOutlined  style={{
                        fontSize: '20px'
                      }}/>
                    </div>
                    <div   style={{
                      marginLeft: '20px'
                    }}>
                      <label style={{
                        fontWeight: '700',
                        fontSize: '20px',
                        lineHeight: '120%',
                        letterSpacing: '0.0025em',
                        color: '#030037'
                      }}>Daily Tasks</label>
                      <p>Select the sub modules that the client can use.</p>
                    </div>
                  </div>
                  <Button icon={<CheckOutlined />} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px 16px',
                    gap: '12px',
                    width: '163px',
                    height: '40px',
                    background:'#153AC7',
                    borderRadius:'8px',
                    color: '#FFFFFF'
                    
                  }}>Visible to Client</Button>
                </div>
                <div style={{
                  borderTop: '1px solid #E8EBF9'
                }}>
                  <Form.Item name="PaymentMode" valuePropName="checked">
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Checkbox  style={{
                      marginLeft: '8px',
                      marginBottom: '10px',
                      marginTop: '10px',
                      fontWeight: '700',
                      fontSize: '14px',
                      lineHeight: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#030037',
                    }}>Show All Sub Modules</Checkbox>
                    <Checkbox style={{
                      marginBottom: '10px'
                    }}>Summary</Checkbox>
                    <Checkbox style={{
                      marginBottom: '10px'
                    }}>View Tasks</Checkbox>
                    <div style={{
                      marginBottom: '10px',
                      marginLeft: '8px',
                    }}>
                    <Checkbox >Create New Task</Checkbox>
                    </div>
                    <Checkbox style={{
                      marginLeft: '8px',
                      marginBottom: '10px'
                    }}>Logbook</Checkbox>
                    <Checkbox style={{
                      marginBottom: '10px'
                    }}>Logsheet</Checkbox>
                    <Checkbox style={{
                      marginBottom: '10px',
                      marginLeft: '35px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.0025em',
                      color: 'rgb(187 186 203)',
                    }}>Daily</Checkbox>
                    <Checkbox style={{
                      marginBottom: '10px',
                      marginLeft: '35px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.0025em',
                      color: 'rgb(187 186 203)',
                    }}>Activity Wise</Checkbox>
                  </div>
                </Form.Item>
                </div>
            </div>
        </div>
      <Form.Item style={{
        marginTop: '29px'
      }}>
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

export default ModuleSetup;