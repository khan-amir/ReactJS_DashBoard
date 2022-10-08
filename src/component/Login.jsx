import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, message } from 'antd';
import axios from 'axios';
import React from 'react';

import './antfile.css'

const handleLogin = async (credentials) => {
// var data = JSON.stringify({
//     "email": "eve.holt@reqres.in",
//     "password": "5cityslicka"
//   });

  var data = JSON.stringify(credentials);
  
  var config = {
    method: 'post',
    url: 'https://reqres.in/api/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  try{
  const response = await axios(config)
  const data = await JSON.stringify(response.data);
  return data;
}catch (error) {
    console.error(error);
  };
}
  

const Login = ({setLogin}) => {

  const onFinish = async (values) => {
    const token = await handleLogin(values)
    if(token) {
        localStorage.setItem('token', JSON.stringify(token));
        setLogin(true)
        message.success('Login Success!');
    }
    else{
        Modal.error({
            title: 'Failed to Login',
            content: 'Please enter Correct Username and Password',
          })
    }
  };


  return (
    <div style={{display: 'flex'}}>
    <div style={{flex: 1, display: 'flex', justifyContent: 'space-around',
                height: '935px',
                alignItems: 'center',
                flexDirection: 'column'}}>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" 
        style={{width: '567px', height: '48px', borderRadius: '9px'}}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password" 
          style={{width: '567px', height: '48px', borderRadius: '9px'}}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button"  
        style={{width: '567px', height: '48px', backgroundColor: '#1334B3', borderRadius: '9px'}}>
          Login
        </Button>
      </Form.Item>
      <Form.Item>

        <a className="login-form-forgot" href='/#'>
          Forgot password ?
        </a>
      </Form.Item>
    </Form>
    <div style={{
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <div style={{
                width: '200px',
                display: 'flex',
                justifyContent: 'space-evenly'
        }}>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
        </div>
        <div>
            <span>© Punctualiti 2022. All rights reserved</span>
        </div>
    </div>
    </div>
    <div style={{flex: 1, background: '#1334B3', display: 'flex',
    flexDirection: 'column', alignItems: 'center', alignContent: 'center'
    }}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div id='loginBoxStyle1'></div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <span style={{
                    fontStyle: 'normal',
                    fontWeight: '800',
                    fontSize: '32px',
                    lineHeight: '44px',
                    letterSpacing: '-0.005em',
                    color: '#FFFFFF'
                }}>360° Solution for Asset Management</span>
                <span style={{
                    fontStyle: 'normal',
                    fontWeight: '200',
                    fontSize: '15px',
                    lineHeight: '22px',
                    textAlign: 'center',
                    letterSpacing: '0.005em',
                    color: '#F8F9FD',
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
    </div>
    </div>
  );
};

export default Login;