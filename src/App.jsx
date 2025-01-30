import React, { useState } from "react";
import UserList from "./components/UserList";

const App = () => {
  // Use of camelCase for variables and arrow function names
  const [simulateError, setSimulateError] = useState(false);

  const handleSimulateError = () => {
    setSimulateError(true);
  };

  return (
    <div className="app">
      <h1>User List</h1>
      <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
        <button onClick={handleSimulateError}>Simulate Error</button>
      </div>
      <UserList simulateError={simulateError} />
    </div>
  );
};

export default App;
