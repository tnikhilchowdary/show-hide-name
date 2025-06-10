import React, { useState } from "react";
import "./App.css";

function App() {
  const [showFirstName, setShowFirstName] = useState(false);
  const [showLastName, setShowLastName] = useState(false);

  return (
    <div className="App">
      <h1 className="title">Show/Hide</h1>

      <div className="buttons">
        <button className="outlined" onClick={() => setShowFirstName(!showFirstName)}>
          Show/Hide Firstname
        </button>
        <button className="filled" onClick={() => setShowLastName(!showLastName)}>
          Show/Hide Lastname
        </button>
      </div>

      <div className="name-display">
        {showFirstName && <div className="name-box">Nikhil Chowdary</div>}
        {showLastName && <div className="name-box">Thummalapalli</div>}
      </div>
    </div>
  );
}

export default App;
