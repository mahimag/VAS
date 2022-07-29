import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextInterface, LoginContext } from '../contexts/LoginContext';
import { Button, Form, Input } from 'antd';
import { createTextChangeRange, updateShorthandPropertyAssignment } from 'typescript';



const LaunchingPage: React.FC = () => {
    const navigate = useNavigate();
    const ctxValue = useContext(LoginContext) as ContextInterface;

    const onFinish = (values: any) => {
        if(values.username === "mahima" && values.password === "gurung"){
        navigate('../create');
        }
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <Button type="primary" htmlType="submit" onClick={() => navigate('/create')}>
        Create Patient Profile
        </Button>
    );
} 

export default LaunchingPage;