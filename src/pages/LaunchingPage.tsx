import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const LaunchingPage: React.FC = () => {
    const navigate = useNavigate();
    return(
        <Button type="primary" htmlType="submit" onClick={() => navigate('/create')}>
        Create Patient Profile
        </Button>
    );
} 

export default LaunchingPage;