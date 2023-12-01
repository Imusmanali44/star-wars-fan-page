import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
