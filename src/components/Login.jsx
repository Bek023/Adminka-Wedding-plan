import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import style from './Style/Login.module.css';
const Login = () => {
    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState(false);
    // To disable submit button at the beginning.
    useEffect(() => {
        setClientReady(true);
    }, []);
    const onFinish = values => {
        console.log('Finish:', values);
    };
    return (
        <div className={style.inner_block}>
            <div className={style.block}></div>
            <Form className={style.form} form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !clientReady ||
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                            className={style.login_btn}
                        >
                            Log in
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;