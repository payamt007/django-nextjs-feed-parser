'use client'

import React from 'react';
import {Card, Form, Input, Button} from 'antd';
import {Row, Col} from 'antd';
import {useLoginMutation} from "@/lib/services/feed"
import {useForm} from 'react-hook-form';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query'
import {redirect, useRouter} from 'next/navigation'

export default function LoginPage() {

    const [login, {isLoading, isError, error}] = useLoginMutation()
    const {register, handleSubmit, formState: {errors},} = useForm();
    const router = useRouter()
    const handleLogin = async (e: any) => {
        await login({username: e.username, password: e.password})
        console.log("isError : ", isError)
        console.log("error : ", error)
        if (isError && error as number == 403) {
            console.log("Error in Login")
        } else {
            router.push('/feeds')
            //redirect('/feeds')
        }
    }

    return (
        <Row>
            <Col span={8} offset={10}>
                <Card title="Login" style={{width: 300}}>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <input {...register('username', {required: true})} />
                        {errors.username && <p>username is required.</p>}
                        <input {...register('password', {required: true})} />
                        {errors.password && <p>password is required.</p>}
                        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                            Login
                        </Button>
                    </form>
                </Card>
            </Col>
        </Row>
    );
};