import React from "react";
import "./login.css";
import { Form,Row, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  
  return (
    <Row>
    <div className="outer">
      <div className="inner">
        <div className="login-section">
          <div className="login-container">
           
      <h1>Global Collection</h1>
      <h2>Welcome</h2>
      < h3>Log in to Global Collection to continue.</h3>

          <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >

      <Form.Item className="no-border-bottom"
        name="Email address "
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email address" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      
      <Form.Item className="align-left forget">
   

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Continue
        </Button>
      </Form.Item>
    </Form>
          </div>
        </div>
      </div>
    </div>
    </Row>
  );
};

export default Login;
