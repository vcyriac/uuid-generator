import React from "react"
import './App.css';

function App() {
  const [uuid, setUUID] = React.useState(0)
  function getUUID() {
      let u = uuid4();
      setUUID(u);
  }
  function uuid4() {
      return ( crypto.randomUUID());
  }

  return (
    <div className="App">
      <div className="modal-form App-header">
          <div className="counter--count">
              <h2>UUID</h2>
              <h1>{uuid}</h1>
          </div>
          
      </div>
      <span className="uuid-btn" onClick={getUUID}></span>
    </div>
  );
}

export default App;
