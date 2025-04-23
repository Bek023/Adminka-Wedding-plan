import React, { useEffect, useState, useRef } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import data from '../Store/Login_data';
import style from './Style/Login.module.css';


const Login = ({ }) => {
    const [form] = Form.useForm();
    const inputRefUsername = useRef(null);
    const inputRefPassword = useRef(null);
    const [clientReady, setClientReady] = useState(false);
    const navigate = useNavigate()
    // To disable submit button at the beginning.

    useEffect(() => {
        setClientReady(true);
        inputRefUsername.current.input.focus();
    }, []);
    // Cookies token
    function setCookie(name, value, minutes) {
        const d = new Date();
        d.setTime(d.getTime() + (minutes * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires;
    }



    // Username and Password checker
    function checkAdmin() {
        if (inputRefUsername.current.input.value == data.userName && inputRefPassword.current.input.value == data.password) {
            setCookie("WeddingPlanAdminToken", 1, 30);
            message.success("Muaffiqayatli");
            navigate("/admin");
        } else {
            message.error("Username yoki parol no`to`g`ri kiritilgan.")
        };
    }
    return (
        <div className={style.inner_block}>
            <div className={style.block}></div>
            <Form className={style.form} form={form} name="horizontal_login" layout="inline">
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input ref={inputRefUsername} prefix={<UserOutlined />} placeholder="Username" className={style.inp} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input ref={inputRefPassword} prefix={<LockOutlined />} type="password" placeholder="Password" className={style.inp} />
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
                            onClick={checkAdmin}
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