import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

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