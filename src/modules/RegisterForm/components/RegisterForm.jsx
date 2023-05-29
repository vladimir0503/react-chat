import React from 'react';
import { Form, Input, Button } from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { Block } from '../../../components';
import { Link } from 'react-router-dom';

const RegisterForm = props => {

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
                <h2>Регистрация</h2>
                <p>Для входа в чат нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success
                    ? <Form
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
                            name="name"
                            hasFeedback
                            help={
                                touched.basic_name && errors.name && `${errors.name}`
                            }
                            validateStatus={
                                !touched.basic_name ? '' : errors.name ? 'error' : 'success'
                            }
                        >
                            <Input placeholder='Ваше имя' size='large' />
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
                        <Form.Item
                            name="repeat_password"
                            help={
                                touched.basic_repeat_password && errors.repeat_password && `${errors.repeat_password}`
                            }
                            validateStatus={
                                !touched.basic_repeat_password ? '' : errors.repeat_password ? 'error' : 'success'
                            }
                        >
                            <Input.Password placeholder='повторите пароль' size='large' />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                className='button'
                                type="primary"
                                htmlType="submit"
                                size='large'
                                onClick={handleSubmit}
                            >
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to='/login'>Войти в аккаунт</Link>
                    </Form>
                    : <div className='auth__success-block'>
                        <div><InfoCircleTwoTone style={{ fontSize: '48px' }} /></div>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На Вашу поску отправлено письмо с ссылкой на подтвердение аккаунта.</p>
                    </div>}
            </Block>
        </>
    );
};

export default RegisterForm;