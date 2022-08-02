import React from "react";
import { useNavigate } from 'react-router-dom';

function Dashboard(){
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }
    return (
        <div>
            <button onClick={navigateToLogin}>Go To Login</button>
        </div>
    );
}

export default Dashboard;