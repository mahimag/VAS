import React, { Profiler, useContext, useState } from 'react';
import Login from './components/Login';
import { LoginProvider } from "./contexts/LoginContext";

const App: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  let  ctxValue;  

  return (
    <div className= "form">
      <LoginProvider>
          <Login />
      </LoginProvider>
    </div>
  );
}

export default App;