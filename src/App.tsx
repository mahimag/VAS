import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routing from "./routes/Routing";
import { store } from "./store";
import "./App.css";
const App: React.FC = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
