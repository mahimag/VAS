import React, { Profiler, useContext, useState } from 'react';
import Login from './pages/Login';
import { LoginProvider } from "./contexts/LoginContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routing from './routes/Routing';
import { store } from "./store";


const App: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  let  ctxValue;  

  return (
    <div className= "form">
      <Provider store={store} >
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;