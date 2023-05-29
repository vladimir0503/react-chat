import React from 'react';
import { Form, Input, Button } from 'antd';
import { Block } from '../../../components';
import { Link } from 'react-router-dom';

const LoginForm = props => {

    const success = false;

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <>
            <div className='auth__top'>
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form
                    name="basic"
                    initialValues={{
                        email: values.email
                    }}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <Form.Item
                        name="email"
                        hasFeedback
                        help={
                            touched.basic_email && errors.email && `${errors.email}`
                        }
                        validateStatus={
                            !touched.basic_email ? '' : errors.email ? 'error' : 'success'
                        }
                    >
                        <Input placeholder='email' size='large' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        help={
                            touched.basic_password && errors.password && `${errors.password}`
                        }
                        validateStatus={
                            !touched.basic_password ? '' : errors.password ? 'error' : 'success'
                        }
                    >
                        <Input.Password placeholder='пароль' size='large' />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className='button'
                            type="primary"
                            htmlType="submit"
                            size='large'
                            onClick={handleSubmit}
                        >
                            Воити в аккаунт
                        </Button>
                    </Form.Item>
                    <Link className='auth__register-link' to='/register'>Зарегистрироваться</Link>
                </Form>
            </Block>
        </>
    );
};

export default LoginForm;